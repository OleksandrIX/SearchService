const {OrderRequirement, OrderStatus} = require("../models");
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
        include: {},
        where: {}
    };

    queryOptions["include"]["model"] = OrderRequirement;

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