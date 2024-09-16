"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateField(value, fieldName) {
    if (!value) {
        return `"${fieldName}" is required`;
    }
    if (typeof value !== 'string') {
        return `"${fieldName}" must be a string`;
    }
    if (value.length < 3) {
        return `"${fieldName}" length must be at least 3 characters long`;
    }
    return null;
}
function validateEntries(req, res, next) {
    const { prayerWhom, prayerReason } = req.body;
    const whomError = validateField(prayerWhom, 'prayerWhom');
    if (whomError)
        return res.status(400).json({ message: whomError });
    const reasonError = validateField(prayerReason, 'prayerReason');
    if (reasonError)
        return res.status(400).json({ message: reasonError });
    next();
}
exports.default = validateEntries;
