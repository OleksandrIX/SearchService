const {sequelize} = require("../db/connect.db");
const {DataTypes} = require("sequelize");

module.exports = sequelize.define(
    "tender_comment",
    {
        id: {type: DataTypes.UUID, primaryKey: true},
        alias: {type: DataTypes.STRING(255), allowNull: false},
        content: {type: DataTypes.TEXT, allowNull: false},
        author_id: {type: DataTypes.UUID, allowNull: false},
        created_at: {type: DataTypes.DATE, allowNull: false},
        updated_at: {type: DataTypes.DATE, allowNull: false}
    },
    {tableName: "tender_comments", timestamps: false, freezeTableName: true}
);