import { UserValidation } from './../validation/user-validation';
import { validation } from "./../validation/validation";
import { CreateUserRequest, UserRessponse } from "../model/user-mode";

export class UserService {
  static async register(request: CreateUserRequest): Promise<UserRessponse> {
    const registerRequest = validation.validate(UserValidation.REGISTER, request);
  }
}
