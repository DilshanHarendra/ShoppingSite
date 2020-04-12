const mongoose=require('mongoose');

const PaymentSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model('PayLogins',PaymentSchema,'Payment')