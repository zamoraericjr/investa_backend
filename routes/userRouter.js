import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.register);
userRouter.post("/login", userController.login);

export default userRouter;