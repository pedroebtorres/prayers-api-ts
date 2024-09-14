"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prayers_controller_1 = __importDefault(require("../controllers/prayers.controller"));
const prayersRouter = (0, express_1.Router)();
prayersRouter.get('/prayers', prayers_controller_1.default.list);
exports.default = prayersRouter;
