import mongoose from 'mongoose'


interface IUser{
    clerkId:string,
    name:string,
    email:string,
    cartItems:mongoose.Types.ObjectId[]
}



const userSchema=new mongoose.Schema<IUser>({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    cartItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"product",
            
        }
    ]
},{minimize:false})


const User=mongoose.models.user || mongoose.model<IUser>('user',userSchema)

export default User