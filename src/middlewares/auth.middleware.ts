import { Request, Response, NextFunction } from 'express';
import jwtUtil from '../utils/jwt.util';
import UserModel from '../database/models/user.model';

function extractToken(token: string): string {
    return token.split(' ')[1];
}

async function validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }
    const token = extractToken(authorization);

    try {
        const decoded = await jwtUtil.verify(token);
        const user = await UserModel.findOne({ where: { user: decoded.user } });

        if (!user) return res.status(401).json({ message: 'Invalid token' });

        next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

export default validateToken;