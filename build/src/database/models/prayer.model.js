"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const sequelize_1 = require("sequelize");
const PrayerModel = index_1.default.define('Prayer', {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    prayerWhom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    prayerReason: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'prayers',
    timestamps: false,
    underscored: true,
});
exports.default = PrayerModel;
