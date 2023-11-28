const {
    OrderRequirement,
    OrderStatus,
    User,
    Cargo,
    Route,
    RouteDistance,
    RouteDuration,
    Point,
    Location,
    Address,
} = require("../models");
const {rangeHandler} = require("./filter.handler");
const {Op} = require("sequelize");

const mapOptions = {
    "status": (queryOptions, query) => {
        queryOptions["where"]["status"] = OrderStatus.getOrderStatusKey(query);
        return queryOptions;
    },
    "rangePrice": (queryOptions, query) => {
        return rangeHandler(queryOptions, query, "price");
    },
    "rangeMinimalStep": (queryOptions, query) => {
        return rangeHandler(queryOptions, query, "minimal_step");
    },
    "_search": (queryOptions, query) => {
        queryOptions["where"][Op.or] = [
            {
                title: {
                    [Op.like]: `%${query}%`
                }
            },
            {
                description: {
                    [Op.like]: `%${query}%`
                }
            }
        ];

        return queryOptions;
    },
};

const getQueryOptions = (query) => {
    let queryOptions = {
        include: [
            {model: User, as: "customer"},
            {model: User, as: "winner"},
            {model: OrderRequirement, as: "requirements"},
            {model: Cargo, as: "cargos"},
            {
                model: Route,
                as: "route",
                include: [
                    {model: RouteDistance, as: "route_distance"},
                    {model: RouteDuration, as: "route_duration"},
                    {
                        model: Point,
                        as: "points",
                        include: [
                            {model: Location, as: "location"},
                            {model: Address, as: "point_address"},
                        ]
                    }
                ]
            }
        ],
        where: {}
    };

    // queryOptions["include"]["model"] = User;

    for (const queryKey in query) {
        if (mapOptions[queryKey]) {
            const processedQueryOptions = mapOptions[queryKey](queryOptions, query[queryKey]);
            queryOptions = {
                ...queryOptions,
                ...processedQueryOptions,
            }
        }
    }

    return queryOptions;
};

module.exports = {getQueryOptions};