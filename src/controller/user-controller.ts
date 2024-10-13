import { UserService } from "../service/user-service";
import { CreateUserRequest, LoginUserRequest, UpdateUserRequest } from "./../model/user-mode";
import { Request, Response, NextFunction } from "express";
import { UserRequest } from "../types/user-request";
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

  static async get(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const response = await UserService.get(req.user!);
      res.status(200).json({ data: response });
    } catch (err) {
      next(err);
    }
  }
  static async update(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const request : UpdateUserRequest = req.body as UpdateUserRequest;
      const response = await UserService.update(request, req.user!);
      res.status(200).json({ data: response });
    } catch (err) {
      next(err);
    }
  }

  static async logut(req: UserRequest, res: Response, next: NextFunction) {
    try {
      await UserService.logout(req.user!);
      res.status(200).json({ data:"OK" });
    } catch (err) {
      next(err);
    }
  }
}
