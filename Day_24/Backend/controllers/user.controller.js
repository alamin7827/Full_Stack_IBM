const { userModel } = require("../models/user.model");
const bcrypt =require('bcrypt');

const signUp =async (req,res)=>{
    const {userName,email,password} =req.body;

    try{
        bcrypt.hash(password, 5, async(err, hash)=> {
            if(err){
                return res.status(400).send({error:err.message})

            }
            else{
                const userData =new userModel({userName,email,password:hash});
                await userData.save();
        
                return res.status(200).send({message:"user registred successfully",user:userData})
            }
           
        });
      

    }
    catch(err){
        return res.status(400).send({err:err.message});

    }
}


module.exports={
    signUp
}