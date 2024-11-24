 import bcrypt from "bcrypt"
import mongoose from "mongoose";
const LoginUser=mongoose.Schema({
    name:
    {
        type:String,
        require:true
    },
    phoneNumber:
    {
        type:Number,
        unique:true,
        require:true,
    },
    Email:
    {
        type:String,
        unique:true,
        require:true,
    },
    Password:
    {
        type:String,
        require:true,

    }
},{timestamps:true})
 

export  const LoginUserschema=mongoose.model("userLoginyoutube",LoginUser);