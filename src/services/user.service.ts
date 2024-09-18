import UserModel, { UserInputtableTypes } from "../database/models/user.model";
import { ServiceResponse } from "../types/ServiceResponse";
import { SafeUser } from "../types/User";

async function create(user: UserInputtableTypes): Promise<ServiceResponse<SafeUser>> {

    const newUser = await UserModel.create(user);
    if (!newUser) {
        return { status: 'INTERNAL_ERROR', data: { message: 'It was not possible to create the user' } }
    }

    const { password, ...noPasswordUser } = newUser.dataValues;

    return { status: 'SUCCESSFUL', data: noPasswordUser }
}

export default {
    create,
}