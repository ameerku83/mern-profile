const express=require("express")
const path =require("path")
const app= express()
const cors = require("cors")
const morgan=require("morgan")
const mongoose=require("mongoose")
const router = require("./signupRoute")

// const router = require("./routes/router")
require('dotenv').config()
app.use(morgan("dev"))
const PORT=process.env.PORT
// app.use('/', router)   
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    console.log('db conected');
})
.catch((error)=>console.log(error))    

app.use("/",router)


app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"resume","build","index.html"))
})
app.use( express.static(path.join(__dirname,"resume","build")))

app.listen(PORT,()=>{
    console.log('server running on '+PORT);
})





