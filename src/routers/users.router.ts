import { Router } from "express";
import userController from "../controllers/user.controller";
import validateToken from "../middlewares/auth.middleware";
import validateRole from "../middlewares/role.middleware";

const usersRouter = Router();

usersRouter.post('/users', [validateToken, validateRole], userController.create);

export default usersRouter;
