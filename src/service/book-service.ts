import { validation } from "../validation/validation";
import {BookResponse ,toBookResponse, CreateBookRequest } from "../model/book-model";
import { BookValidation } from "../validation/book-validation";
import { User } from "@prisma/client";
import { prismaClient } from "../application/database";

export class BookService {
  static async createBook(user:User, request: CreateBookRequest): Promise<BookResponse> {
    const createRequest = validation.validate(BookValidation.CREATE, request);
    
    const book = await prismaClient.book.create({
        data: createRequest
    });

    return toBookResponse(book);
  }
}