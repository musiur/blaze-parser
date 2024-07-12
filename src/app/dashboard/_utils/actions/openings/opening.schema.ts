import { z } from "zod"

export const OpeningSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    recruiter: z.string().min(1),
    salary: z.number().min(1),
    jobType: z.enum(["part-time", "full-time", "contract", "remote"]),
    location: z.string().min(1),
    applications: z.array(z.string())
})

export type T_OpeningSchema = z.infer<typeof OpeningSchema>