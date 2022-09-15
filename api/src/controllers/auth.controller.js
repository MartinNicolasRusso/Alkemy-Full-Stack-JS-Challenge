import User  from "../models/Users";
import bcryptjs from "bcryptjs";
import { generateJWT } from "../helpers/generate-jwt";

export const login = async (req,res) => {
    const {email, password} = req.body;

    try {
        const user= await User.findOne({where:{email}})
        if(!user){
            return res.status(201).json({
                msg:`User ${email} doesn't exist.`
            })
        }
        if(!user.state){
            return res.status(400).json({
                msg:"Unsubscribed user, talk to the administrator"
            }) 
        }

        const validPassword=bcryptjs.compareSync(password, user.password)
        if(!validPassword){
            return res.status(400).json({
                msg:"Invalid password"
            })
        }

         const token=await generateJWT(user.id)
        res.status(201).json({user,token})

    } catch (error) {
        console.log(error)
        res.status(404).send (error)
    }
}