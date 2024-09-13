import { Router } from "express";
import prayersController from "../controllers/prayers.controller";

const prayersRouter = Router();

prayersRouter.get('/prayers', prayersController.list);

export default prayersRouter;