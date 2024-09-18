import { QueryInterface } from "sequelize";
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.bulkInsert('users', [{
            user: 'pastor_1',
            name: 'Joe Skipper',
            password: bcrypt.hashSync('skipper_pastor', SALT_ROUNDS),
            role: 'Pastor',
        },
        {
            user: 'official_1',
            name: 'Jakob Ingebrigtsen',
            password: bcrypt.hashSync('ingebrigtsen_pastor', SALT_ROUNDS),
            role: 'Official',
        },
        {
            user: 'normal_1',
            name: 'Conner Mantz',
            password: bcrypt.hashSync('mantz_normal', SALT_ROUNDS),
            role: 'Normal',
        }
        ], {});
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.bulkDelete('users', {});
    }
}