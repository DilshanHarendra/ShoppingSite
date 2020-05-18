const mongoose= require('mongoose');

const CartSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    products:{
        type: Object,
        required: true
    },

    quntity:{
        type:Number,
        required:true
    },
    isOrder:{
        type: Boolean,
        required: false
    }
   
   



});
module.exports =mongoose.model('Carts',CartSchema,'Cart');