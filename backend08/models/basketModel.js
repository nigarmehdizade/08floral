import mongoose from "mongoose";

const basketSchema=mongoose.Schema(
{
image:{type:String,required:true},
name:{type:String , required:true},
price:{type:String,required : true}
},  { timestamps: true });


const basketModel=mongoose.model('florabasket',basketSchema)

export default basketModel;