const Register = require('./registerSchema') //imported schema

const registerUser = async(req,res)=>{
    try{
        const {firstname,lastname,email,accounType,password} = req.body

        const user = await Register.create({
            firstName: firstname,
            lastName: lastname,
            email: email, 
            accounType:accounType,
            password: password
        })
        if(user){
            res.status(200).json({message:'Successfully registered'})
        }else{
            res.status(400).json({message:"Not registered"})
        }
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports=registerUser;