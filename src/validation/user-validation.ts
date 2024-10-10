import z, { ZodType } from 'zod';

export class UserValidation {
    static readonly : ZodType = z.object({
        name: z.string().min(3).max(100),
        username: z.string().min(3).max(100),
        email: z.string().email(),
        password: z.string().min(6).max(100),
    })
}


