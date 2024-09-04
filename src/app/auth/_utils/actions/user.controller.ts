"use server"

import dbConnect from "@/lib/dbconnect";
import User from "./user.model";
import { SA_ErrorHandler } from "@/lib/utils";
import { cookies } from "next/headers";

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

export async function A_GetUser() {
    try {
        await dbConnect();
        const token = cookies().get("token")?.value;
        const userdata = JSON.parse(cookies().get("user")?.value || "")

        if (!token) {
            return {
                success: false,
                message: "No token found",
            };
        }

        if (!userdata) {
            return {
                success: false,
                message: "No user found",
            };
        }


        const users = await User.find({ _id: userdata._id });
        return {
            success: true,
            data: JSON.parse(JSON.stringify(users))[0]
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

