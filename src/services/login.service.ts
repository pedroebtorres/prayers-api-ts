import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt.util';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
    if (!login.user || !login.password) {
        return {
            status: 'INVALID_DATA',
            data: {
                message: '"user" and "password" are required',
            }
        };
    }

    const foundUser = await UserModel.findOne({ where: { user: login.user } });

    if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) { /* Caso seja diferente, retornamos esse objeto no formato ServiceResponse, sinalizando um erro com uma mensagem específica para esse caso, e o status UNAUTHORIZED que será mapeado para o status 403 pela função mapStatusHTTP implementada anteriormente! Mais uma vez, a tipagem é definida pela inferência! */
        return { status: 'UNAUTHORIZED', data: { message: 'user or password invalid' } };
    }

    const { id, user } = foundUser.dataValues;

    const token = jwtUtil.sign({ id, user });

    return { status: 'SUCCESSFUL', data: { token } };
}
export default {
    verifyLogin,
};