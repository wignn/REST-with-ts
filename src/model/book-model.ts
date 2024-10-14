import { Book } from "@prisma/client";

export type BookResponse = {
    id: number;
    title: string;
    author: string;
    description: string;
}
export type CreateBookRequest = {
    title: string;
    author: string;
    description: string;
    cover: string;
}


export function toBookResponse(book:Book):BookResponse{
    return {
        id: book.id,
        title: book.title,
        author: book.author,
        description: book.description
    }
}