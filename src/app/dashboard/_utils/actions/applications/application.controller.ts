"use server"

import dbConnect from "@/lib/dbconnect";
import { cookies } from "next/headers"
import { Application } from "./application.model";

export const GetApplications = async () => {
    try {
        dbConnect();
        const token = cookies().get("token");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }

        const response = await Application.find({});

        if (!response.length) {
            return {
                success: false,
                message: "No Applications found",
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

export const PostApplication = async (data: any) => {
    try {
        dbConnect();
        const token = cookies().get("token");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }
        const response = await Application.create(data);
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

export const UpdateApplication = async (data: any, _id: string) => {
    try {
        dbConnect();
        const token = cookies().get("token");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }

        const response = await Application.findOneAndUpdate({ _id }, data);
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

export const DeleteApplication = async (_id: string) => {
    try {
        dbConnect();
        const token = cookies().get("token");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }
        const response = await Application.findOneAndDelete({ _id });
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