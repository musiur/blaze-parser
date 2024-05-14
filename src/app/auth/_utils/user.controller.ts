"use server"

import dbConnect from "@/lib/dbconnect";
import User from "./user.model";
import { SA_ErrorHandler } from "@/lib/utils";

export async function A_GetUsers() {
    try {
        await dbConnect();
        const users = await User.find({});
        return {
            success: true,
            data: users
        }
    } catch (e) {
        return SA_ErrorHandler(e)
    }
}

export async function A_DeleteUsers(_id: string) {
    try {
        await dbConnect();

        const user = await User.findOneAndDelete({ _id });
        if (!user) {
            return {
                success: false,
                message: 'User not found',
            };
        }

        return {
            success: true,
            message: 'User deleted successfully',
        };
    } catch (error) {
        return SA_ErrorHandler(error)
    }
}

