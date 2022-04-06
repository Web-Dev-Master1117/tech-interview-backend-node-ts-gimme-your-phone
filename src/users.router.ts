import express from "express";
import users from "./users.json";

const userRouter = express.Router();

userRouter.get("/", async function (req, res, next) {
  res.send(users);
});

export { userRouter };
