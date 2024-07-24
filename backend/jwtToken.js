
const jwt=require("jsonwebtoken")
const secretKey="gcdgfyuj"

const jwtToken=async (user,password)=>{
    const userData={user,password}
    let token= jwt.sign(userData,secretKey)
 return token;
}





  
module.exports={jwtToken}  










































