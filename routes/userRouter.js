import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.register);
userRouter.put("/:id", userController.editUser);

export default userRouter;