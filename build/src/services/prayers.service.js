"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prayer_model_1 = __importDefault(require("../database/models/prayer.model"));
async function list() {
    const prayers = await prayer_model_1.default.findAll();
    return { status: 'SUCCESSFUL', data: prayers };
}
async function create(prayer) {
    try {
        const prayerAdded = await prayer_model_1.default.create(prayer);
        if (!prayerAdded) {
            throw new Error('It was not possible to create the prayer');
        }
        return {
            status: 'SUCCESSFUL',
            data: prayer,
        };
    }
    catch (error) {
        if (error instanceof Error) {
            return {
                status: 'INTERNAL_ERROR',
                data: { message: error.message },
            };
        }
        else {
            return {
                status: 'INTERNAL_ERROR',
                data: { message: 'An unexpected error occurred' },
            };
        }
    }
}
exports.default = {
    list,
    create,
};
