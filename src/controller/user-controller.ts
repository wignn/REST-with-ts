import { UserService } from "../service/user-service";
import { CreateUserRequest, LoginUserRequest } from "./../model/user-mode";
import { Request, Response, NextFunction } from "express";

export class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateUserRequest = req.body as CreateUserRequest;
      const response = await UserService.register(request);
      res.status(200).json({ data: response });
    } catch (err) {
      next(err);
    }
  }

  static async Login(req: Request, res: Response, next: NextFunction) {
    try {
      const request: LoginUserRequest = req.body as LoginUserRequest;
      const response = await UserService.login(request);
      res.status(200).json({ data: response });
    } catch (err) {
      next(err);
    }
  }

  
}
