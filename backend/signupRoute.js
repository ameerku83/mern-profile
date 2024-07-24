const router=require("express").Router()
const bcrypt=require("bcryptjs")

const LoginModel = require("./models/loginModel")
const { jwtToken } = require("./jwtToken")
const messageModel = require("./models/messageModel")
router.post('/signup',async(req,res)=>{
    const {email,password,fullname}=req.body
   try {
    
    let hashPassword= await bcrypt.hash(password,10)

    let user = await  LoginModel({email,password:hashPassword,fullname})
    await user.save()
    res.status(200).send({message:"signup success"})
   } catch (error) {
    console.log(error);
    
   }  
})

router.post('/login',async(req,res)=>{
    const {email,password}=req.body
   try {
    
     const user = await LoginModel.findOne({email})
    if(!user){res.status(401).send("invalid email")}
    const token= await jwtToken(email,user.password) 
    const cPassword= await bcrypt.compare(password,user.password)
    if(!cPassword) {res.status(401).send("invalid password")}


    res.status(200).send({status:true,message:"Login success",token:token})
   } catch (error) {
    console.log(error);
    
   }  



})

router.post('/message',async(req,res)=>{
    const data=req.body
   try {
    
    let message = await  messageModel(data)
    await message.save()
    res.status(200).send({message:"message send"})
   } catch (error) {
    console.log(error);
    
   }  
})
module.exports=router