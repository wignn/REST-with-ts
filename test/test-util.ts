import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";


export class userTest {
  static async delete() {
    await prismaClient.user.delete({
      where: {
        username: "test",
      },
    });
  }

  static async create() {
    await prismaClient.user.create({
      data: {
        name: "test",
        username: "test",
        email: "test@gmail.com",
        password: await bcrypt.hash("test", 10),
        token: "test",
      },
    });
  }
}
