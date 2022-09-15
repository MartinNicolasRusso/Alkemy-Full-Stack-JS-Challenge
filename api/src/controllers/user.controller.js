import bcryptjs from "bcryptjs";
import  {Users} from '../models/Users.js';
import { generateJWT } from "../helpers/generate-jwt.js";


export const getUser = async (req,res) =>{
    const {id} = req.params;
    const user = await Users.findByPk(id);

    if(user){
        res.status(201).json(user)
    }else {
        res.status(404).json({msg:`User ${id} doesn't exist`})
    }
};

export const postUser = async (req,res) => {
    const {email, password, name} = req.body;
    try {
        const alreadyExistEmail = await Users.findOne({
            where: {
                email: email
            }
        })
    
    if(alreadyExistEmail){
        return res.status(404).json({msg:`User ${email} already exist`})
    }

    const user= new Users({name, email, password, state:true});

        const salt=bcryptjs.genSaltSync(10);
        user.password=bcryptjs.hashSync(password,salt)

        await user.save()
        console.log(user)
        const token=await generateJWT(user.id)

        res.json({user,token})

    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async ( req,res ) => {
    const {id} = req.params;
    const {email, name, password} = req.body;
    const user = await User.findByPk(id)

    if(user){
        await user.update({email , name , password });
        return res.status(201).json(user);
    }else{
        return res.status(404).json({msg:`User ${id} doesn't exist`})
    }
}

export const deleteUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findByPk(id);

    if(user){
        await user.update({state: false})
        return res.status(201).json({msg:`User ${id} has been deleted succesfully`})
    }else{
        return res.status(404).json({msg:`User ${id} doesn't exist`})
    }
}