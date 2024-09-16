"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('users', [{
                user: 'pastor_1',
                name: 'Joe Skipper',
                password: bcryptjs_1.default.hashSync('skipper_pastor', SALT_ROUNDS),
                role: 'Pastor',
            },
            {
                user: 'official_1',
                name: 'Jakob Ingebrigtsen',
                password: bcryptjs_1.default.hashSync('ingebrigtsen_pastor', SALT_ROUNDS),
                role: 'Official',
            }
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('users', {});
    }
};
