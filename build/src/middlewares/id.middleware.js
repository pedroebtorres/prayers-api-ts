"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateId(req, res, next) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    next();
}
exports.default = validateId;
