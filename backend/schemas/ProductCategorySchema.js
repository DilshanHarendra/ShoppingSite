const mongoose= require('mongoose');

const ProductCategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    categoryDiscription:{
        type: String,
        required: true
    },
    categoryNote:{
        type: String,
        required: true
    },
  



});
module.exports =mongoose.model('ProductCategorys',ProductCategorySchema,'ProductCategory');