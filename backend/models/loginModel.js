 const mongoose=require("mongoose")

 let loginShema=new mongoose.Schema({
    fullname:String, 
    email:{type:String,unique:true},
    password:String


 },)

let LoginModel=mongoose.model('signup',loginShema)
 module.exports=LoginModel

