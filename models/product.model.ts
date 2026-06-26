import mongoose from 'mongoose'


interface IProduct{
    userId:mongoose.Types.ObjectId,
    name:string,
    description:string,
   price:number,
   offerPrice:number,
   category?:string,
   image:string
}



const userSchema=new mongoose.Schema<IProduct>({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    price:{
        type:Number,
        default:0
    },
    offerPrice:{
        type:Number,
        default:0
    },
    image:{
        type:String,
        default:""
        
    },
    category:{
        type:String,
        
    },
    
},{minimize:false})


const Product=mongoose.models.product || mongoose.model<IProduct>('product',userSchema)

export default Product