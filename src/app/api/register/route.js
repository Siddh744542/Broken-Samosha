import mongoose from "mongoose";
import { User } from "@/model/User";
import bcrypt from "bcrypt";
export async function POST(req){
    const body= await req.json();
    mongoose.connect(process.env.MONGO_URL);

    const pass = body.password;

    if(!pass?.length || pass?.length < 5){
        new Error("password must be atleast 5 characters");
        return false;
    }
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(pass, salt);
    const createdUser = await User.create(body);
    return Response.json(createdUser);
}