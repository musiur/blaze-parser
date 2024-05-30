import { z } from 'zod';

export const UserSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password is required"),
    role: z.enum(["admin", "recruiter", "applicant"]),
    resumeData: z.string().optional()
});

export type T_UserSchema = z.infer<typeof UserSchema>;
