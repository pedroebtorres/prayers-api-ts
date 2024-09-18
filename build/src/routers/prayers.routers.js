"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prayers_controller_1 = __importDefault(require("../controllers/prayers.controller"));
const entries_middleware_1 = __importDefault(require("../middlewares/entries.middleware"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const id_middleware_1 = __importDefault(require("../middlewares/id.middleware"));
const prayersRouter = (0, express_1.Router)();
prayersRouter.get('/prayers', prayers_controller_1.default.list);
prayersRouter.post('/prayers', entries_middleware_1.default, prayers_controller_1.default.create);
prayersRouter.delete('/prayers/:id', [auth_middleware_1.default, id_middleware_1.default], prayers_controller_1.default.exclude);
exports.default = prayersRouter;
