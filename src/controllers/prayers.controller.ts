import { Request, Response } from "express";
import prayersService from "../services/prayers.service";
import mapStatusHTTP from "../utils/mapSattusHTTP.util";

async function list(_req: Request, res: Response) {
    const serviceResponse = await prayersService.list();

    res.status(200).json(serviceResponse.data);
}

async function create(req: Request, res: Response) {
    const { prayerReason, prayerWhom } = req.body;
    const serviceResponse = await prayersService.create({ prayerReason, prayerWhom });

    if (serviceResponse.status !== 'SUCCESSFUL') {
        res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(201).json(serviceResponse.data);
}

async function exclude(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await prayersService.exclude(Number(id))

    if (serviceResponse.status !== 'SUCCESSFUL') {
        res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
}

export default {
    list,
    create,
    exclude,
}