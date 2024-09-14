import { Router } from "express";
import prayersController from "../controllers/prayers.controller";
import validateEntries from "../middlewares/entries.middleware";

const prayersRouter = Router();

prayersRouter.get('/prayers', prayersController.list);

prayersRouter.post('/prayers', validateEntries, prayersController.create);

export default prayersRouter;