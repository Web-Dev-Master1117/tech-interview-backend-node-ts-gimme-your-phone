import express from "express";
import users from "./users.json";

const userRouter = express.Router();

userRouter.get("/", function (req, res, next) {
  res.send(users);
});

export { userRouter };
