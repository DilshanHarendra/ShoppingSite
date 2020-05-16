const mongoose= require('mongoose');

const OrderSchema = new mongoose.Schema({
    totalAmaount:{
        type:String,
        required:true
    },
    user_id:{
        type: String,
        required: true
    },
    products:{
        type: Array,
        required: true
    },
    numberOfItem:{
        type: String,
        required: true
        
    },
    orderCreateDate:{
        type:String,
        required:false
    }
    
   



});
module.exports =mongoose.model('Orders',OrderSchema,'Order');