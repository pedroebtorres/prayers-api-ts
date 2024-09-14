"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prayers_service_1 = __importDefault(require("../services/prayers.service"));
async function list(_req, res) {
    const serviceResponse = await prayers_service_1.default.list();
    res.status(200).json(serviceResponse.data);
}
exports.default = {
    list,
};
