import { z } from "zod"

export const ApplicationSchema = z.object({
    applicantId: z.string(),
    openingId: z.string(),
    similarity: z.number()
})

export type T_ApplicationSchema = z.infer<typeof ApplicationSchema>