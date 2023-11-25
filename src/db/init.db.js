const {sequelize} = require("./connect.db");

const {
    Order,
    OrderRequirement,
    TenderComment,
    TenderProposal,
    Cargo
} = require("../models");

OrderRequirement.belongsTo(Order, {foreignKey: "order_id"});
TenderComment.belongsTo(Order, {foreignKey: "order_id"});
TenderProposal.belongsTo(Order, {foreignKey: "order_id"});
Cargo.belongsTo(Order, {foreignKey: "order_id"});

Order.hasMany(OrderRequirement, {foreignKey: "order_id"});
Order.hasMany(TenderComment, {foreignKey: "order_id"});
Order.hasMany(TenderProposal, {foreignKey: "order_id"});
Order.hasMany(Cargo, {foreignKey: "order_id"});

sequelize.sync()
    .then(() => console.log("Sync with the database is successful"))
    .catch(err => console.log(`Error sync with the database: ${err}`));