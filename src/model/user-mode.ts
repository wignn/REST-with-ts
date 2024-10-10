import { User } from "@prisma/client";

export type UserRessponse = {
    id: number;
    name: string;
    username: string;
    email: string;
    token?: string;
}



export type CreateUserRequest = {
    name: string;
    username: string;
    email: string;
    password: string;
}

export type LoginUserRequest = {
    username: string;
    password: string;
}

export type UpdateUserRequest = {
    name?: string;
    password?: string;
}

export function toUserResponse(user: User): UserRessponse {
    return {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email
    }
}



