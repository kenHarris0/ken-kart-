import { NextRequest,NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
import User from "@/models/user.model";

export async function POST(){

      console.log("SYNC ROUTE HIT");

   const {userId}=await auth()

   await connectDB()

   if(!userId){
    return NextResponse.json({},{status:401})
    
   }

    let user = await User.findOne({
        clerkId: userId,
    });
    

    if(!user){
        const clerkuser=await currentUser()

        user=await User.create({
            clerkId:clerkuser!.id,
            name:clerkuser!.firstName,
            email:clerkuser!.emailAddresses[0].emailAddress,

        })
    }

    return NextResponse.json(user)

   





}