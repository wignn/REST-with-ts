import { UserService } from "../service/user-service";
import { CreateUserRequest } from "./../model/user-mode";
import { Request, Response, NextFunction } from "express";

export class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateUserRequest = req.body as CreateUserRequest;
      const response = await UserService.register(request);
      res.status(201).json({ data: response });
    } catch (err) {
      next(err);
    }
  }
}
