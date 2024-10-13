import { z, ZodType } from "zod";


export class BookValidation {
    static CREATE: ZodType = z.object({
        title: z.string().min(1),
        author: z.string().min(1),
        description: z.string().min(1),
        genre: z.number().min(1),
        cover: z.string().min(1)
    })
}