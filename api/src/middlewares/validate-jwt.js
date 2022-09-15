import jwt from 'jsonwebtoken';
import '../models/Users.js';



 export   const validatejwt=async(req,res,next)=>{
        const token=req.header('x-token');
        if(!token){
            return res.status(401).json({msg:'Token missing'})
        }
        try {
            console.log(token)
            const {id}=  jwt.verify(token,'Th1S1SMyS3CR37k3Y')
            console.log(id)

           const user= await User.findByPk(id)
            console.log(user)
            if(!user){
                return res.status(401).json({msg:'Invalid User'})
            }

           if(!user.state){
               return res.status(401).json({msg:'Invalid Token'})
           }

            req.user=user;
            next();
        } catch (error) {
            console.log(error)
            return res.status(401).json({
                msg:'Invalid Token'
            })
        }
        
        
    }