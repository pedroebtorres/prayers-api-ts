"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
const mapSattusHTTP_util_1 = __importDefault(require("../utils/mapSattusHTTP.util"));
async function create(req, res) {
    const serviceResponse = await user_service_1.default.create(req.body);
    if (serviceResponse.status !== 'SUCCESSFUL') {
        res.status((0, mapSattusHTTP_util_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(201).json(serviceResponse.data);
}
exports.default = {
    create,
};
