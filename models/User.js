const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String,
        unique:true
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    joined:{
        type:Date,
        default:Date.now(),

    },
    password:{
        type:String,
        required:true
    }

});


module.exports=User=mongoose.model('user',userSchema)