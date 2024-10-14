import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

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
        role: "USER",
      },
    });
  }

  static async get(): Promise<User> {
    const user = await prismaClient.user.findFirst({
      where: {
        username: "test",
      },
    });

    if (!user) {
      throw new Error("User not found");
    }
    
    return user;
  }
}

export class bookTest {
  static async deleteAll() {
    await prismaClient.book.deleteMany({
      where: {
        title: "new book",
      }
    });
  }
}