"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function validateRole(req, res, next) {
    const { user } = req;
    if (!user) {
        return res.status(401).json({ message: 'User not authenticated' });
    }
    if (user.role === 'Normal') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}
exports.default = validateRole;
