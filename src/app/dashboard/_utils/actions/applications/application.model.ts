
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

    similarity: {
        type: Number,
        required: true,
    },

});

export const Application: Model<IApplication> = mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);