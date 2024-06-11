import { z } from "zod"

export const ApplicationSchema = z.object({
    applicantId: z.string(),
    recruiterId: z.string(),
    openingId: z.string(),
    jobType: z.string(),
    location: z.string(),
    title: z.string(),
    applicant: z.string(),
    recruiter: z.string(),
    similarity: z.number(),
    status: z.string().default("pending"),
    appliedAt: z.date().default(new Date)
})

export type T_ApplicationSchema = z.infer<typeof ApplicationSchema>