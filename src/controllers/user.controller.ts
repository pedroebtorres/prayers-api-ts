import { Request, Response } from 'express';
import usersService from '../services/user.service';
import mapStatusHTTP from '../utils/mapSattusHTTP.util';

async function create(req: Request, res: Response) {
    const serviceResponse = await usersService.create(req.body);

    if (serviceResponse.status !== 'SUCCESSFUL') {
        res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(201).json(serviceResponse.data);
}
export default {
    create,
}