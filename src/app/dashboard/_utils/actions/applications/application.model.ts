
import mongoose, { Schema, Document, Model } from 'mongoose';
import { T_ApplicationSchema } from './application.schema';

export interface IApplication extends Document, T_ApplicationSchema { }

const ApplicationSchema: Schema<IApplication> = new Schema({
    title: {
        type: String,
        required: false,
    },

    description: {
        type: String,
        required: true,
    },

    recruiter: {
        type: String,
        required: true,
    },

    salary: {
        type: Number,
        required: false,
    },

    jobType: {
        type: String,
        enum: ["full-time", "part-time", "cobtract", "remote"],
        default: "full-time"
    },

    location: {
        type: String,
        required: true,
    },

    applications: {
        type: [String],
        required: false,
    }

});

export const Application: Model<IApplication> = mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);