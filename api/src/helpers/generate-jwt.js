import jwt from "jsonwebtoken"



export const generateJWT=(id)=>{

    return new Promise((resolve,reject)=>{
        const payload={id}
        jwt.sign(payload,'Th1S1SMyS3CR37k3Y',{
            expiresIn:'1d'
        },(err,token)=>{
            if(err){
                console.log(err)
                reject('Jwt can not be generated')
            }else{
                resolve(token)
            }
        })
    })
}


