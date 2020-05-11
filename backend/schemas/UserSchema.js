const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({

    Fullname:{
        type:String,
        required:true

    },
    Username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    newPassword:{
        type:String,
        required:true
    },
    accTocken:{
        type:String,
        required:true
    },

});
module.exports=mongoose.model('Users',UserSchema,'User')