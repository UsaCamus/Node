import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    birthDate: {
        type: Date
    }
});

export const UserModel = mongoose.model('users',UserSchema)