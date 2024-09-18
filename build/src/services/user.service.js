"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../database/models/user.model"));
async function create(user) {
    const newUser = await user_model_1.default.create(user);
    if (!newUser) {
        return { status: 'INTERNAL_ERROR', data: { message: 'It was not possible to create the user' } };
    }
    const { password, ...noPasswordUser } = newUser.dataValues;
    return { status: 'SUCCESSFUL', data: noPasswordUser };
}
exports.default = {
    create,
};
