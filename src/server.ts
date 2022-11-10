import "./dotenvconfig";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import "express-async-errors";
import { AppError } from "./errors/AppError";

import { routes } from "./routes";
import "./database";

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return res.status(err.statusCode).json(err.message);
  }

  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(3333, () => console.log("Server is running. 🔥"));