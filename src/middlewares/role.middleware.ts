import { Request, Response, NextFunction } from 'express';

async function validateRole(req: Request, res: Response, next: NextFunction) {
    const { user } = req;

    if (!user) {
        return res.status(401).json({ message: 'User not authenticated' });
    }

    if (user.role === 'Normal') {
        return res.status(403).json({ message: 'Forbidden' });
    }

    next();

}

export default validateRole;
