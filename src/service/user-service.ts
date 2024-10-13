import { UserValidation } from "./../validation/user-validation";
import { validation } from "./../validation/validation";
import {
  CreateUserRequest,
  LoginUserRequest,
  toUserResponse,
  UpdateUserRequest,
  UserRessponse,
} from "../model/user-mode";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { User } from "@prisma/client";

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

  static async login(request: LoginUserRequest): Promise<UserRessponse> {
    const loginRequest = validation.validate(UserValidation.LOGIN, request);
    let user = await prismaClient.user.findUnique({
      where: {
        username: loginRequest.username,
      },
    });

    if (!user) {
      throw new ResponseError(401, "Invalid username or password");
    }

    const isPasswordValid = await bcrypt.compare(
      loginRequest.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new ResponseError(401, "Invalid username or password");
    }

    user = await prismaClient.user.update({
      where: {
        id: user.id,
      },
      data: {
        token: uuid(),
      },
    });

    const response = toUserResponse(user);
    response.token = user.token!;
    return response;
  }

  static async get(user: User): Promise<UserRessponse> {  
    return toUserResponse(user);
  }

  static async update(request: UpdateUserRequest, user: User): Promise<UserRessponse> {
    const updateRequest = validation.validate(UserValidation.UPDATE, request);
    if(updateRequest.name){
      user.name = updateRequest.name;
    }

    if (updateRequest.password) {
      user.password = await bcrypt.hash(updateRequest.password, 10);
    }
    const result = await prismaClient.user.update({
      where: {
        username: user.username,
      },
      data: user,
    });
    return toUserResponse(result);
  }

  static async logout(user: User): Promise<UserRessponse> {
   const result = await prismaClient.user.update({
      where: {
        username: user.username,
      },
      data: {
        token: null,
      },
    });
    return toUserResponse(result);
  }

}
