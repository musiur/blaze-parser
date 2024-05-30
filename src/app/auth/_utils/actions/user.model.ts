import mongoose, { Schema, Document, Model } from 'mongoose';
import { T_UserSchema } from './user.schema';

export interface IUser extends Document, T_UserSchema { }

const UserSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    resumeData: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        enum: ["admin", "recruiter", "applicant"],
        default: "applicant",
    },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
