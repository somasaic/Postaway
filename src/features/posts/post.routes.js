import express from "express";
import PostController from "./post.controller.js";

const postRouter = express.Router();
const postCtrl = new PostController();

postRouter.get("/all", postCtrl.all);
postRouter.get("/:id", postCtrl.single);

export default postRouter;
