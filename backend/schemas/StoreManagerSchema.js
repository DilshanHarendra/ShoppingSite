const mongoose= require('mongoose');

const StoreManagerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type: String,
        required: true
    },
    password:{
        type: Array,
        required: true
    },
    emailAddress:{
        type: String,
        required: true
    },
    birthDay:{
        type:String,
        required:true
    },
    telephoneNumber:{
        type:String,
        required:true
    }
   



});
module.exports =mongoose.model('StoreManagers',StoreManagerSchema,'StoreManager');