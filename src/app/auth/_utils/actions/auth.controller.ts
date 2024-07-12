"use server"

import dbConnect from "@/lib/dbconnect";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "./user.model";
import { T_UserSchema, UserSchema } from "./user.schema";
import { SA_ErrorHandler } from "@/lib/utils";
import { cookies } from "next/headers";

export async function A_LoginUser(email: string, password: string) {
    try {
        await dbConnect();

        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
            expiresIn: '1h',
        });

        const userdata = {
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
            resumeData: user.resumeData
        };
        console.log(userdata)
        cookies().set("token", token);
        cookies().set("user", JSON.stringify({ ...userdata, resumeData: user?.resumeData?.slice(0, 100) || "" }));

        return {
            success: true,
            message: "Login successful",
            user: userdata
        }


    } catch (error) {
        return SA_ErrorHandler(error);
    }
}



export async function A_CreateUsers(data: T_UserSchema) {
    try {
        await dbConnect();

        // Validate the input data
        const parsedData = UserSchema.parse(data);

        // Check if the email is already in use
        const existingUser = await User.findOne({ email: parsedData.email });
        if (existingUser) {
            return {
                success: false,
                message: 'Email is already in use.',
            };
        }

        const salt = await bcrypt.genSalt(10);
        parsedData.password = await bcrypt.hash(parsedData.password, salt);
        // Create a new user instance
        const user = new User(parsedData);

        // Save the user to the database
        await user.save();
        return {
            success: true,
            message: "User created successfully"
        }
    } catch (error: any) {
        return SA_ErrorHandler(error);
    }
}

export async function A_Logout() {
    try {
        cookies().delete("token");
        cookies().delete("user");
        return {
            success: true,
            message: "Logout successful"
        }
    } catch (error) {
        return SA_ErrorHandler(error);
    }
}