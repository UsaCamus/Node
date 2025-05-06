import mongoose from "mongoose";
import { PostModel } from "./post.model";

mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://Futureskill-user:admin1234@cluster0.a3zz8pm.mongodb.net/')

async function createPost(){
    const newPost = new PostModel({
        title: `test-title${Math.random()}`,
        status: 'draft',
        likeCount: 100,
    });
    await newPost.save();
    console.log('Post',newPost)
}

async function findLikeCountGreaterThanNinety(){
    const result = PostModel.find({
        likeCount: {
            $gt: 89
        }
    });
    console.log('result', result);
}

async function findLikeCount(){
    const result = PostModel.find({
        likeCount: {
            $lt: 90,
            $gt: 9,
            // $gte: 90,
        }
    });
    console.log('result', result);
}

async function findBySearch(){
    const result = await PostModel.find(
        {
            title: {
                $regex: /^test/,    //ขึ้นต้น
                $regex: /2$/,       //ลงท้าย
                $regex: /Test/i,    //sensitive ตัวเล็กใหญ่
            }
        },
        {
            //projection เลือกเฉพาะฟิวส์ที่ต้องการ
            title: true,
            status: true,
        }
    );
    console.log('result', result);
}

// createPost();