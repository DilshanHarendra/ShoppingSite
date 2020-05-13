const mongoose=require('mongoose');

const PaymentSchema=new mongoose.Schema({

    payID:{
        type:Number,
        required:true
    },
    userID:{
        type:String,
        required:true
    },
    orderID:{
        type:String,
        required:true
    },
    payAmount:{
        type:String,
        required:true
    },
    payDate:{
        type:Date,
        required:true
    },
    payType:{
        type:String,
        required:true
    },
    payReceipt:{
        type:Boolean,
        required:true
    },
    cardNumber:{
        type:Number,
        required:true
    },
    cardCSV:{
        type:Number,
        required:true
    },
    cardType:{
        type:String,
        required:true
    },
    cardHolderName:{
        type:String,
        required:true
    },
    cardExpireDate:{
        type:Date,
        required:true
    }

});
module.exports=mongoose.model('Payments',PaymentSchema,'Payment');