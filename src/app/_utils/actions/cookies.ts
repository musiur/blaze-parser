"use server"

import { cookies } from "next/headers"

export async function GET___COOKIE(name: string): Promise<{ success: boolean, data?: { _id: string; role: string }, message?: string } | undefined> {
    try {
        const data = cookies().get(name)?.value;
        if (data) {
            return {
                success: true,
                data: JSON.parse(data)
            }
        }
        return { success: false, message: "Cookie not found" };
    } catch (error) {
        return {
            success: false,
            message: "Failed to get user data"
        }
    }
}
