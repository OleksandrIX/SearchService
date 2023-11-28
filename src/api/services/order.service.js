const {Order, OrderStatus} = require("../../models");

const findAllOrders = async (options = {}) => {
    let orders = await Order.findAll(options);

    orders = orders.map((order) => {
        order = order.toJSON();
        order.status = OrderStatus.values[order.status].content;

        delete order["customer_id"];
        delete order["winner_id"];

        order["requirements"].forEach(requirement => {
            delete requirement["order_id"];
        });

        order["cargos"].forEach(cargo => {
            delete cargo["order_id"];
        });

        delete order["route"]["order_id"];
        delete order["route"]["route_distance"]["route_id"];
        delete order["route"]["route_duration"]["route_id"];

        order["route"]["points"].forEach(point => {
            delete point["route_id"];
            delete point["location_id"];
            delete point["address_id"];
        });

        return order;
    });

    return orders;
};

module.exports = {
    findAllOrders,
};