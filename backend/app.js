const express=require("express")
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



app.listen(PORT,()=>{
    console.log('server running on '+PORT);
})





