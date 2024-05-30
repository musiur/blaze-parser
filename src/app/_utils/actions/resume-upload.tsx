"use server";

import User from "@/app/auth/_utils/actions/user.model";
import dbConnect from "@/lib/dbconnect";
import { cookies } from "next/headers";

export const UploadResumeAction = async (data: string) => {
  try {
    await dbConnect();
    const token = cookies().get("token")?.value;
    if (!token) {
      return {
        success: false,
        message: "No token found",
      };
    }
    const user = JSON.parse(cookies().get("user")?.value || "");

    const response = await User.findOneAndUpdate(
      { _id: user._id },
      { resumeData: data }
    );

    console.log(response);

    if (!response) {
      return {
        success: false,
        message: "Could not update",
      };
    }

    return {
      success: true,
      data: JSON.parse(JSON.stringify(response)),
      message: "Updated successfully with resume data",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
