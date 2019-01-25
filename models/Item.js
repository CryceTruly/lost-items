const mongoose=require('mongoose')

const Itemchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:Date.now
}

});

module.exports=Item=mongoose.model('item',Itemchema);