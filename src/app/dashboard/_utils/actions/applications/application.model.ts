
import mongoose, { Schema, Document, Model } from 'mongoose';
import { T_ApplicationSchema } from './application.schema';

export interface IApplication extends Document, T_ApplicationSchema { }

const ApplicationSchema: Schema<IApplication> = new Schema({
    applicantId: {
        type: String,
        required: false,
    },

    openingId: {
        type: String,
        required: true,
    },

    recruiterId: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    applicant: {
        type: String,
        required: true,
    },

    recruiter: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    jobType: {
        type: String,
        required: true,
    },

    similarity: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },

    appliedAt: {
        type: Date,
        required: true,
    },

});

export const Application: Model<IApplication> = mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);