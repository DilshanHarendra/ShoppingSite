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

    },type:{
        type:String,
        required:true

    },
    newPassword:{
        type:String,
        

    },   token:{
        type:String,
        

    }, 

});
module.exports=mongoose.model('Users',UserSchema,'User')