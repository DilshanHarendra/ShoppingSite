const mongoose= require('mongoose');

const CartSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    products:{
        type: Array,
        required: true
    },
    // quntity:{
    //     type: String,
    //     required: true
    // }
   
   



});
module.exports =mongoose.model('Carts',CartSchema,'Cart');