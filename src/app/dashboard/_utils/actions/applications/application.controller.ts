"use server"

import dbConnect from "@/lib/dbconnect";
import { cookies } from "next/headers"
import { Application } from "./application.model";
import { GetOpening } from "../openings/opening.controller";
import { calculateSimilarity } from "./consine-similarity";
import { A_GetUser } from "@/app/auth/_utils/actions/user.controller";
import { revalidatePath } from "next/cache";
import User from "@/app/auth/_utils/actions/user.model";

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

export const GetApplicationsRecruiters = async () => {
    try {
        dbConnect();
        const token = cookies().get("token");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }
        const uid = cookies().get("user")?.value;
        if (!uid) {
            return {
                success: false,
                message: "Recrutier ID not token found",
            }
        }
        const userdata = JSON.parse(uid);

        const response = await Application.find({ recruiterId: userdata._id });

        if (!response.length) {
            return {
                success: false,
                message: "No Applications found",
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

export const GetApplicationsApplicant = async () => {
    try {
        dbConnect();
        const token = cookies().get("token");
        if (!token) {
            return {
                success: false,
                message: "No token found",
            }
        }
        const uid = cookies().get("user")?.value;
        if (!uid) {
            return {
                success: false,
                message: "Applicant ID not token found",
            }
        }
        const userdata = JSON.parse(uid);

        const response = await Application.find({ applicantId: userdata._id });

        if (!response.length) {
            return {
                success: false,
                message: "No Applications found",
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

        const userdata = JSON.parse(cookies().get("user")?.value || "")
        if (!userdata) {
            return {
                success: false,
                message: "No user found!",
            }
        }

        const userdataFromDb = await A_GetUser();

        // @ts-ignore
        if (!userdataFromDb?.data?.resumeData) {
            return {
                success: false,
                message: "No resume data found! Upload your resume from __settings__ tab in dashboard.",
            }
        }
        const openingResult = await GetOpening(data.openingId);
        const formatedOpeningResult = JSON.parse(JSON.stringify(openingResult))

        if (!openingResult?.data?.description) {
            return {
                success: false,
                message: "No opening found!",
            }
        }


        // get applications
        let previousApplications = await Application.findOne({ openingId: openingResult?.data?._id });
        const formatedApplications = JSON.parse(JSON.stringify(previousApplications));

        if (formatedApplications?.applicantId === userdata?._id) {
            return {
                success: false,
                message: "Already applied!",
            }
        }



        // get recruiter details
        const recruiterDetails = await User.findById(openingResult?.data?.recruiter);
        const formatedRecruiterDetails = JSON.parse(JSON.stringify(recruiterDetails));
        if (!formatedRecruiterDetails) {
            return {
                success: false,
                message: "Recruiter not found!",
            }
        }

        const doc1 = openingResult?.data?.description;
        // @ts-ignore
        const doc2 = userdataFromDb?.data?.resumeData;
        const similarityPayload = { doc1, doc2 };

        const similarities = calculateSimilarity(similarityPayload);

        data.similarity = similarities
        data.applicantId = userdata._id;
        data.recruiterId = openingResult?.data?.recruiter;
        data.title = openingResult?.data?.title;
        data.applicant = userdata?.name;
        data.recruiter = formatedRecruiterDetails.name;
        data.location = openingResult?.data?.location;
        data.jobType = openingResult?.data?.jobType;
        data.status = "pending";
        data.appliedAt = new Date();


        const response = await Application.create(data);


        if (!response) {
            return {
                success: false,
                message: "Could not apply",
            }
        }
        revalidatePath("/dashboard/openings")
        return {
            success: true,
            data: similarities || "",
            message: "Applied successfully"
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