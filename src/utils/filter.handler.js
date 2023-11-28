const {Op} = require("sequelize");

module.exports.rangeHandler = (queryOptions, query, key) => {
    queryOptions["where"][key] = {};
    if (typeof query === "object")
        if (query["start"] && query["end"])
            queryOptions["where"][key][Op.between] = [query["start"], query["end"]];
        else if (query["start"])
            queryOptions["where"][key][Op.gte] = query["start"];
        else if (query["end"])
            queryOptions["where"][key][Op.lte] = query["end"];

    return queryOptions;
};
