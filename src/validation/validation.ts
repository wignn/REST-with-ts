import { ZodType } from "zod";

export class validation {
    static validate<T>(schema: ZodType, data: T): T {
        return schema.parse(data);
    }
}