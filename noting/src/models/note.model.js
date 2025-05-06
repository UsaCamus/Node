import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema({
    title:{
        type: String,
        require: true,
    },
    detail:{
        type: String,
        default: '',
    },
    tag:{
        type: String,
        default: '',
    },
    status:{
        type: String,
        enum: ["Draft","In-Progress","Cencel","Done"],
        default: 'Draft'
    },
});

export const NoteModel = mongoose.model('notes',NoteSchema);