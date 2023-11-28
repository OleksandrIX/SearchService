const {OrderRequirement, OrderStatus} = require("../models");
const {Op} = require("sequelize");

const mapOptions = {
    "status": (queryOptions, query) => {
        queryOptions["where"] = {
            status: OrderStatus.getOrderStatusKey(query)
        }

        return queryOptions;
    },
    "range-price": (queryOptions, query) => {
        queryOptions["where"] = {
            price: {
                [Op.between]: [query["start"], query["end"]]
            }
        }
    },
    "range-minimal-step": (queryOptions, query) => {
        queryOptions["where"] = {
            minimal_step: {
                [Op.between]: [query["start"], query["end"]]
            }
        }
    }
}

const getQueryOptions = (query) => {
    let queryOptions = {};

    queryOptions["include"] = {
        model: OrderRequirement
    };

    for (const queryKey in query) {
        if (mapOptions[queryKey]) {
            const processedQueryOptions = mapOptions[queryKey](queryOptions, query[queryKey]);
            queryOptions = {
                ...queryOptions,
                where: {...queryOptions["where"]},
                ...processedQueryOptions,
            }
        }
    }

    return queryOptions;
};

module.exports = {getQueryOptions};