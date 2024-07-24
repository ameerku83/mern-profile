const mongoose=require("mongoose")

let messageSchema=new mongoose.Schema({
   
  phone:Number,
  message:String


})

let messageModel=mongoose.model('message',messageSchema)
module.exports=messageModel