const mongoose = require('mongoose')

const register = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { 
        type: String,  
        unique: true,  
        lowercase: true,  
        trim: true 
    },
    password: {  
        type: String,   
        minlength: 6,  
        required: [true, "Please provide a Password"],  
       },
    accountType:{type:String,enum:['Shelter','Customer']},
    },

 { timestamps: true 
})

const Register= mongoose.model('Register', register);

module.exports = Register