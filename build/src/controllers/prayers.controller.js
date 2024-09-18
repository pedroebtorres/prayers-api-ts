"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prayers_service_1 = __importDefault(require("../services/prayers.service"));
const mapSattusHTTP_util_1 = __importDefault(require("../utils/mapSattusHTTP.util"));
async function list(_req, res) {
    const serviceResponse = await prayers_service_1.default.list();
    res.status(200).json(serviceResponse.data);
}
async function create(req, res) {
    const { prayerReason, prayerWhom } = req.body;
    const serviceResponse = await prayers_service_1.default.create({ prayerReason, prayerWhom });
    if (serviceResponse.status !== 'SUCCESSFUL') {
        res.status((0, mapSattusHTTP_util_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(201).json(serviceResponse.data);
}
async function exclude(req, res) {
    const { id } = req.params;
    const serviceResponse = await prayers_service_1.default.exclude(Number(id));
    if (serviceResponse.status !== 'SUCCESSFUL') {
        res.status((0, mapSattusHTTP_util_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
}
exports.default = {
    list,
    create,
    exclude,
};
