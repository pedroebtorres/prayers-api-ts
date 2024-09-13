import PrayerModel, { PrayerSequelizeModel } from "../database/models/prayer.model";
import { ServiceResponse } from "../types/ServiceResponse";

async function list(): Promise<ServiceResponse<PrayerSequelizeModel[]>> {
    const prayers = await PrayerModel.findAll();

    return { status: 'SUCCESSFUL', data: prayers }
}

export default {
    list,
}