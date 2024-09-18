import { Request, Response, NextFunction } from 'express';

function validateId(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    next();
}

export default validateId;