import { UserValidation } from "./../validation/user-validation";
import { validation } from "./../validation/validation";
import {
  CreateUserRequest,
  toUserResponse,
  UserRessponse,
} from "../model/user-mode";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import bcrypt from "bcrypt";

export class UserService {
  static async register(request: CreateUserRequest): Promise<UserRessponse> {
    const registerRequest = validation.validate(
      UserValidation.REGISTER,
      request
    );
    const totalUsersWithUsername = await prismaClient.user.count({
      where: {
        username: registerRequest.username,
      },
    });
    const totalUsersWithEmail = await prismaClient.user.count({
      where: {
        email: registerRequest.email,
      },
    });

    if (totalUsersWithUsername != 0 || totalUsersWithEmail != 0) {
      throw new ResponseError(400, "User already exists");
    }

    registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

    const user = await prismaClient.user.create({
      data: registerRequest,
    });
    return toUserResponse(user);
  }
}
