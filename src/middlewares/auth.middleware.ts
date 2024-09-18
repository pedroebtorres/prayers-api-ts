import { Request, Response, NextFunction } from 'express';
import jwtUtil from '../utils/jwt.util';
import UserModel from '../database/models/user.model';

function extractToken(authorization: string): string {
    return authorization.split(' ')[1];
}

async function decodeToken(authorization: string) {
    const token = extractToken(authorization);
    return await jwtUtil.verify(token);
}

async function validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const decoded = await decodeToken(authorization);

        const user = await UserModel.findOne({ where: { user: decoded.user } });

        if (!user) {
            return res.status(401).json({ message: 'Invalid token, user not found' });
        }
        req.user = user;

        next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

export default validateToken;
