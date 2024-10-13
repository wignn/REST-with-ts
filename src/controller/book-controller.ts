import { CreateBookRequest } from "../model/book-model";
import { BookService } from "../service/book-service";
import { UserRequest } from "../types/user-request";
import { NextFunction, Response } from "express";


export class BookController {
    static async create(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const request : CreateBookRequest = req.body as CreateBookRequest;
            const response = await BookService.createBook(req.user!, request);
            res.status(200).json({data: response});
        }catch(err) {
            next(err);
        }
    }
}