import mongoose from "mongoose";


const ProductDataSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
        price:{
        type:Number,
        required:true
    },
        image:{
        type:String,
        default: "",
    },
        rating:{
        type:Number,
        min:0,
        max:5,
        default:0
    },
        condition:{
        type:String,
        required:true,
        
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    
},
{timestamps:true}
);

const ProductData= mongoose.model("ProductData",ProductDataSchema);

export default ProductData;