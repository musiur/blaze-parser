"use server"

import dbConnect from "@/lib/dbconnect";
import { cookies } from "next/headers"
import { IOpening, Opening } from "./opening.model";
import { Application } from "../applications/application.model";
import { Document, Types } from "mongoose";
import { revalidatePath } from "next/cache";

export const GetOpenings = async () => {
    try {
        dbConnect();
        const token = cookies().get("token");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }

        const response = await Opening.find({});

        if (!response.length) {
            return {
                success: false,
                message: "No openings found",
                data: [],
            }
        }

        return {
            success: true,
            data: response,
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

export const GetOpeningsRecruiter = async () => {
    try {
        dbConnect();
        const token = cookies().get("token");
        const user = JSON.parse(cookies().get("user")?.value || "");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }
        if (!user) {
            return {
                success: false,
                message: "No user id found",
            }
        }

        const response = await Opening.find({});

        if (!response.length) {
            return {
                success: false,
                message: "No openings found",
                data: [],
            }
        }

        return {
            success: true,
            data: response.filter((item) => item.recruiter === user._id),
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

export const PostOpening = async (data: any) => {
    try {
        dbConnect();
        const token = cookies().get("token")?.value;
        const user = JSON.parse(cookies().get("user")?.value || "");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }
        if (!user) {
            return {
                success: false,
                message: "No user id found",
            }
        }
        data.recruiter = user?._id || "kk"
        const response = await Opening.create(data);
        if (!response) {
            return {
                success: false,
                message: "Could not create",
            }
        }

        revalidatePath("/dashboard/openings")
        return {
            success: true,
            message: "New opening created successfully"
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

export const UpdateOpening = async (data: any, _id: string) => {
    try {
        dbConnect();
        const token = cookies().get("token");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }

        const response = await Opening.findOneAndUpdate({ _id }, data);
        return {
            success: true,
            data: response,
        }

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

export const DeleteOpening = async (_id: string) => {
    try {
        dbConnect();
        const token = cookies().get("token");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }
        await Application.deleteMany({ recruiterId: _id });

        const response = await Opening.findOneAndDelete({ _id });
        return {
            success: true,
            data: response,
        }

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

