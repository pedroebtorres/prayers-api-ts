import { DataTypes, Model, QueryInterface } from 'sequelize';
import { User } from '../../types/User';
export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<User>>('users', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            user: {
                type: DataTypes.STRING,
                allowNull: false,
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
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('users');
    }
};
