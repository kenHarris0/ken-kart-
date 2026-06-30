import mongoose from "mongoose"

export interface IProduct{
    _id?:string,
    userId?:mongoose.Types.ObjectId,
    name:string,
    description:string,
   price:number,
   offerPrice:number,
   category?:string,
   image:string[]
}

export interface IUser{
    _id?:string,
    clerkId:string,
    name:string,
    email:string,
    cartItems:{
        product:mongoose.Types.ObjectId,
        quantity:number
    }[]
}

