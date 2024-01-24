import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { User } from "@/model/User";
import { UserInfo } from "@/model/UserInfo"
export async function PUT(req){
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const {name, ...otherUserData} = data;
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    
    await User.updateOne({email}, {name});
    await UserInfo.findOneAndUpdate({email}, otherUserData, {upsert: true});

    console.log({session, data});
    return Response.json(true);
}

export async function GET(){
    mongoose.connect(process.env.MONGO_URL);
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if(!email){
        return Response.json({});
    }
    const user = await User.findOne({email}).lean();
    const userInfo = await UserInfo.findOne({email}).lean();
    return Response.json({...user,...userInfo});
}