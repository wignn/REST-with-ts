import { User } from "@prisma/client";

export type UserRessponse = {
    id: number;
    name: string;
    email: string;
    token?: string;
}



export type CreateUserRequest = {
    name: string;
    username: string;
    email: string;
    password: string;
}

export function toUserResponse(user: User): UserRessponse {
    return {
        id: user.id,
        name: user.name,
        email: user.email
    }
}



