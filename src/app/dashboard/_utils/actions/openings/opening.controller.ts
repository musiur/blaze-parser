"use server"

import dbConnect from "@/lib/dbconnect";
import { cookies } from "next/headers"
import { Opening } from "./opening.model";
import { revalidatePath } from "next/cache";
import { Application } from "../applications/application.model";


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
            data: JSON.parse(JSON.stringify(response)),
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

export const GetOpening = async (_id: string) => {
    try {
        dbConnect();

        const response = await Opening.find({ _id });

        if (!response.length) {
            return {
                success: false,
                message: "No openings found",
                data: [],
            }
        }

        return {
            success: true,
            data: JSON.parse(JSON.stringify(response))[0],
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
        const data = response.filter((item) => item.recruiter === user._id);
        return {
            success: true,
            data: data.map((item) => {
                return JSON.parse(JSON.stringify(item))
            }),
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

        await Opening.findOneAndUpdate({ _id }, data);

        revalidatePath("/dashboard/openings")
        return {
            success: true,
            message: "Opening updated successfully",
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

        await Opening.findOneAndDelete({ _id });

        revalidatePath("/dashboard/openings")
        return {
            success: true,
            message: "Successfully deleted"
        }

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
        }
    }
}

