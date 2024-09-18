import { Optional } from "sequelize";

export type User = {
    id: number,
    user: string,
    name: string,
    password: string,
    role: string,
};

export type SafeUser = Optional<User, 'password'>;