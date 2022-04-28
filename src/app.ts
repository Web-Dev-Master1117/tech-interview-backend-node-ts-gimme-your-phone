import express from "express";
import { userRouter } from "./users.router";
const app = express();

const port = 5000;

app.get("/", (req, res) => res.send("Welcome !"));

app.use("/users", userRouter);

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
