"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prayer_model_1 = __importDefault(require("../database/models/prayer.model"));
async function list() {
    const prayers = await prayer_model_1.default.findAll();
    return { status: 'SUCCESSFUL', data: prayers };
}
exports.default = {
    list,
};
