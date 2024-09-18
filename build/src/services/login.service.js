"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_util_1 = __importDefault(require("../utils/jwt.util"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
async function verifyLogin(login) {
    if (!login.user || !login.password) {
        return {
            status: 'INVALID_DATA',
            data: {
                message: '"user" and "password" are required',
            }
        };
    }
    const foundUser = await user_model_1.default.findOne({ where: { user: login.user } });
    if (!foundUser || !bcryptjs_1.default.compareSync(login.password, foundUser.dataValues.password)) { /* Caso seja diferente, retornamos esse objeto no formato ServiceResponse, sinalizando um erro com uma mensagem específica para esse caso, e o status UNAUTHORIZED que será mapeado para o status 403 pela função mapStatusHTTP implementada anteriormente! Mais uma vez, a tipagem é definida pela inferência! */
        return { status: 'UNAUTHORIZED', data: { message: 'user or password invalid' } };
    }
    const { id, user } = foundUser.dataValues;
    const token = jwt_util_1.default.sign({ id, user });
    return { status: 'SUCCESSFUL', data: { token } };
}
exports.default = {
    verifyLogin,
};
