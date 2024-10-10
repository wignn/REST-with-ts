
export type UserRessponse = {
    id: number;
    name: string;
    email: string;
    token?: string;
}


export type CreateUserRequest = {
    username: string;
    email: string;
    password: string;
}



