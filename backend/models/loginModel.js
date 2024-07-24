 const mongoose=require("mongoose")

 let loginShema=new mongoose.Schema({
    fullname:String,
    email:String,
    password:String


 },)

let LoginModel=mongoose.model('signup',loginShema)
 module.exports=LoginModel

