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
        
    }
   



});
module.exports =mongoose.model('OrderSchemas',OrderSchema,'OrderSchema');