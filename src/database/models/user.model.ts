import db from './index';
import { User } from '../../types/User';
import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';

export type UserInputtableTypes = Optional<User, 'id'>;
type UserSequelizeModelCreator = ModelDefined<User, UserInputtableTypes>;
export type UserSequelizeModel = Model<User, UserInputtableTypes>;

const UserModel: UserSequelizeModelCreator = db.define('User', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'users',
    timestamps: false,
});

export default UserModel;