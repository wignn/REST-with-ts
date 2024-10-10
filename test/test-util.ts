import { prismaClient } from "../src/application/database";

export class userTest {
    static async delete() {
         await prismaClient.user.delete({
            where: {
                username:"test"
            }
        })
    }
}