import { UserValidation } from "./../validation/user-validation";
import { validation } from "./../validation/validation";
import { CreateUserRequest, UserRessponse } from "../model/user-mode";
import { prismaClient } from "../application/database";

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

    if (totalUsersWithUsername || totalUsersWithEmail) {
      throw new Error
    }
  }
}
