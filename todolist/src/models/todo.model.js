import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema({
    title:{
        type: String,
        require: true,
    },
    content:{
        type: String,
        default: '',
    },
    status:{
        type: String,
        enum: ['in progress','completed','backlog','canceled'],
        default: 'in progress',
    },
    assignee : {
        type: String,
        require: true,
    },
    sunscriberCounter: {
        type: Number,
        default: 0,
    },
})

export const TodoModel = mongoose.model('todo',TodoSchema);