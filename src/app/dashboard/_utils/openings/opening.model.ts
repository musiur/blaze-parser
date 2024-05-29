
import mongoose, { Schema, Document, Model } from 'mongoose';
import { T_OpeningSchema } from './opening.schema';

export interface IOpening extends Document, T_OpeningSchema { }

const UserSchema: Schema<IOpening> = new Schema({
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

export const Opening: Model<IOpening> = mongoose.models.Opening || mongoose.model<IOpening>('Opening', UserSchema);