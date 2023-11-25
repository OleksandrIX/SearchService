const {OrderRequirement, OrderStatus} = require("../models");
const getQueryOptions = (query) => {
    const queryOptions = {};

    queryOptions["include"] = {
        model: OrderRequirement
    };

    if (Object.keys(query).includes("status")) {
        queryOptions["where"] = {
            status: OrderStatus.getOrderStatusKey(query["status"])
        };
    }

    return queryOptions;
};

module.exports = {getQueryOptions};