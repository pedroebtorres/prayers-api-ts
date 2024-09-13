import db from './index';
import { Prayer } from '../../types/Prayer';
import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';

type PrayerInputtableTypes = Optional<Prayer, 'id'>;
type PrayerSequelizeModelCreator = ModelDefined<Prayer, PrayerInputtableTypes>;
export type PrayerSequelizeModel = Model<Prayer, PrayerInputtableTypes>;


const PrayerModel: PrayerSequelizeModelCreator = db.define('Prayer', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    prayerWhom: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    prayerReason: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'prayers',
    timestamps: false,
    underscored: true,
});

export default PrayerModel;