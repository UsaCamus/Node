import express from "express";
import bodyParser from "body-parser";
import { router as NoteRouter} from "./modules/note/note-controller";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(NoteRouter)
app.listen(3002 , async () => {
    console.log("http://localhost/3002")
    mongoose.set('strictQuery',true)
    await mongoose.connect('mongodb+srv://Futureskill-user:admin1234@cluster0.a3zz8pm.mongodb.net/')
})