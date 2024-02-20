import express from "express";
import UserController from "./user.controller.js";

const userCtrl = new UserController();

const userRouter = express.Router();

userRouter.post("/signup", userCtrl.signUp);
userRouter.post("/signin", userCtrl.signIn);

export default userRouter;
