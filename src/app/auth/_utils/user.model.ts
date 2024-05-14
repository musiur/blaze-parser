import bcrypt from 'bcryptjs';
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
    role: {
        type: String,
        enum: ["admin", "recruiter", "applicant"],
        default: "applicant",
    },
});

// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
