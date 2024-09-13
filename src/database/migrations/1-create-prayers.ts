import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Prayer } from '../../types/Prayer';

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Prayer>>('prayers', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            prayerWhom: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            prayerReason: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        });
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('prayers');
    }
};
