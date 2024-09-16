import { Router } from "express";
import prayersController from "../controllers/prayers.controller";
import validateEntries from "../middlewares/entries.middleware";
import validateToken from "../middlewares/auth.middleware";
import validateId from "../middlewares/id.middleware";

const prayersRouter = Router();

prayersRouter.get('/prayers', prayersController.list);

prayersRouter.post('/prayers', validateEntries, prayersController.create);

prayersRouter.delete('/prayers/:id', [validateToken, validateId], prayersController.exclude);

export default prayersRouter;