import {User} from "../Models/User.js"
import jwt from 'jsonwebtoken'

export const Authenticate = async (req, res, next) =>{
    const token = req.header("Auth")
    try {
        if(!token) return res.json({message:"Login First"})
        
        const decode = jwt.verify(token, process.env.SECRET)
        // console.log(decode)

         const id = decode.userId

         let user = await User.findById(id)

         if(!user) return res.json({message:"User not exist"})

        req.user = user


        next();
        
    } catch (error) {
        res.json({message:error})
        
    }
}
