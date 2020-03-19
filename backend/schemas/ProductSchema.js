const mongoose= require('mongoose');

const ProductSchema = new mongoose.Schema({
    proName:{
        type:String,
        required:true
    },
    catogory:{
        type: String,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    },
    condition:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    shipping: {
        type:Number
    },
    discount:{
        type:Number
    },
    id:{
        type:String,
        required:true
    }



});
module.exports =mongoose.model('Prosucts',ProductSchema,'product');