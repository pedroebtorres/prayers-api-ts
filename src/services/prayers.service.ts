import PrayerModel, { PrayerInputtableTypes, PrayerSequelizeModel } from "../database/models/prayer.model";
import { Prayer } from "../types/Prayer";
import { ServiceResponse } from "../types/ServiceResponse";

async function list(): Promise<ServiceResponse<PrayerSequelizeModel[]>> {
    const prayers = await PrayerModel.findAll();

    return { status: 'SUCCESSFUL', data: prayers }
}

async function create(prayer: PrayerInputtableTypes): Promise<ServiceResponse<PrayerInputtableTypes>> {
    try {
        const prayerAdded = await PrayerModel.create(prayer);

        if (!prayerAdded) {
            throw new Error('It was not possible to create the prayer');
        }

        return {
            status: 'SUCCESSFUL',
            data: prayer,
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                status: 'INTERNAL_ERROR',
                data: { message: error.message },
            };
        } else {
            return {
                status: 'INTERNAL_ERROR',
                data: { message: 'An unexpected error occurred' },
            };
        }
    }
}
export default {
    list,
    create,
}