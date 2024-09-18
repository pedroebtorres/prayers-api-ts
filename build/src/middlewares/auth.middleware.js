"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_util_1 = __importDefault(require("../utils/jwt.util"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
function extractToken(authorization) {
    return authorization.split(' ')[1];
}
async function decodeToken(authorization) {
    const token = extractToken(authorization);
    return await jwt_util_1.default.verify(token);
}
async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = await decodeToken(authorization);
        const user = await user_model_1.default.findOne({ where: { user: decoded.user } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid token, user not found' });
        }
        req.user = user;
        next();
    }
    catch (e) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
exports.default = validateToken;
