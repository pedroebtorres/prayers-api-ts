import { Request, Response } from "express";
import prayersService from "../services/prayers.service";

async function list(_req: Request, res: Response) {
    const serviceResponse = await prayersService.list();

    res.status(200).json(serviceResponse.data);
}

export default {
    list,
}