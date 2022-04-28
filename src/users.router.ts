import express from "express";
import { getUsers } from "./controllers/users";

const userRouter = express.Router();

userRouter.get("/", async function (req, res, next) {
  const users = await getUsers()

  res.send(users);
  
});

export { userRouter };
