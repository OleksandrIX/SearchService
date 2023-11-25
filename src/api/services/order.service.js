const {Order, OrderStatus} = require("../../models");

const findAllOrders = async (options = {}) => {
    let orders = await Order.findAll(options);

    orders = orders.map((order) => {
        order = order.toJSON();
        order.status = OrderStatus.values[order.status].content;
        return order;
    });

    return orders;
};

module.exports = {
    findAllOrders,
};