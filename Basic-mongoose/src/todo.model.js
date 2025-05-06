import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema({
    name: {
        type: String,
    },
    status: {
        type: String,
    },
});

export const TodelModel = mongoose.model('todo',TodoSchema)