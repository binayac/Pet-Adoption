const Register = require('./registerSchema') //imported schema
const bcrypt = require('bcrypt')

const registerUser = async(req,res)=>{
    try{
        const {firstname,lastname,email,accountType,password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt) 

        const user = await Register.create({
            firstname: firstname,
            lastname: lastname,
            email: email, 
            password: hashedPassword,
            accountType:accountType
        })
        if(user){
            res.status(200).json({message:'Successfully registered'})
        }else{
            res.status(400).json({message:"Not registered"})
        }
        // res.status(200).json({message:{firstname,lastname},sucess:true})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const loginUser = async(req,res)=>{
    try{
        const{email,password}= req.body

        const login = await  Register.findOne({email: email})
        if(!login){
            res.status(400).json({message:"Not registered"})
        }else{
            const checkPassword = await  bcrypt.compare(password, login.password)
            if(checkPassword){
                res.status(200).json({message:"logged in sucessfully"})
            }
            
        }
    }catch(err){
        res.status(500).json({message:err})
    }

}

module.exports={registerUser,loginUser};