import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://reisama2904:sherry2904@cluster0.z58bv.mongodb.net/blog-app');
    console.log("DB Connected");
}