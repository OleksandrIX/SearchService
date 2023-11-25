const {sequelize} = require("../db/connect.db");
const {DataTypes} = require("sequelize");

module.exports = sequelize.define(
    "tender_proposal",
    {
        id: {type: DataTypes.UUID, primaryKey: true},
        alias: {type: DataTypes.STRING(255), allowNull: false},
        price: {type: DataTypes.DOUBLE, allowNull: false},
        approved: {type: DataTypes.BOOLEAN, allowNull: false},
        canceled: {type: DataTypes.BOOLEAN, allowNull: false},
        operator_id: {type: DataTypes.UUID, allowNull: false},
        created_at: {type: DataTypes.DATE, allowNull: false},
        updated_at: {type: DataTypes.DATE, allowNull: false}
    },
    {tableName: "tender_proposals", timestamps: false, freezeTableName: true}
);