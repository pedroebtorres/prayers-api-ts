"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mapStatusHTTP;
function mapStatusHTTP(status) {
    var _a;
    const statusHTTPMap = {
        INVALID_DATA: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        INTERNAL_ERROR: 500,
    };
    return (_a = statusHTTPMap[status]) !== null && _a !== void 0 ? _a : 500;
}
