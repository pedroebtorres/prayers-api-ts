"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_service_1 = __importDefault(require("../services/login.service"));
const mapSattusHTTP_util_1 = __importDefault(require("../utils/mapSattusHTTP.util"));
async function login(req, res) {
    const serviceResponse = await login_service_1.default.verifyLogin(req.body);
    if (serviceResponse.status !== 'SUCCESSFUL') {
        return res.status((0, mapSattusHTTP_util_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
}
exports.default = {
    login,
};
