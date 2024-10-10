import { NextFunction, Response, Request } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../error/response-error";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    res
      .status(400)
      .json({ message: `validation error: ${JSON.stringify(err)}` });
  } else if(err instanceof ResponseError) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};
