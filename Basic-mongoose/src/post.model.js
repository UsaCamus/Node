import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: ['draft','publish'], // กำหนดค่าไม่ให้ใส่นอกเหนือจากนี้
        default: 'draft',
    }
});

export const PostModel = mongoose.model('post',PostModel);