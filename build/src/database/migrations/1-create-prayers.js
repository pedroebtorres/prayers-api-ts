"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('prayers', {
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            prayerWhom: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'prayer_whom',
            },
            prayerReason: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'prayer_reason',
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('prayers');
    }
};
