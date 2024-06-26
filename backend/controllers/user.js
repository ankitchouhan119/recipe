
import { User } from '../Models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();


export const register = async (req, res)=>{
    const {name, gmail, password} = req.body

    try {
        let user = await User.findOne({gmail})
        if(user) return res.json({message: "User Already exist"})

        const hashPass = await bcrypt.hash(password,10)

        user = await User.create({name, gmail, password:hashPass})

        res.json({message: "User Register Successfully", user})
        
    } catch (error) {
        res.json({message:error})
    }

}

export const login = async (req, res) =>{
    const {gmail, password} = req.body

    try {
        let user = await User.findOne({gmail});

        if(!user) return res.json({message:"User not exist"})

        const validPass = await bcrypt.compare(password, user.password);

        if(!validPass) return res.json({message:"Invalid Password"})
        
        const token = jwt.sign({userId: user._id}, process.env.SECRET,{
            expiresIn: process.env.EXPIRE
        })

        res.json({message: `Welcome ${user.name}`, token})
        
    } catch (error) {
        res.json({message: error.message})
    }
}

export const profile = async (req,res) =>{
    res.json({user: req.user})
}

 
