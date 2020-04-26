const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');

router.use(bodyParser());
router.use(core());

let ProductCategory = require('../schemas/ProductCategorySchema');

router.route('/add').post((req,res)=>{
    const categoryName=req.body.productCategoryName;
    const categoryDiscription=req.body.productCategoryDiscription;
    const categoryNote=req.body.productCategoryNote;
    

    const newProductCategory=new ProductCategory({
        categoryName,
        categoryDiscription,
        categoryNote
    })

    newProductCategory.save()
        .then(newProductCategory=>res.json('new product category added'))
        .catch(err=>res.status(400).json('Error in Create new product category '+err));


});


router.route('/:id').get((req,res)=>{
    ProductCategory.findById(req.params.id)
        .then(exercise=>res.json(exercise))
        .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/').get((req,res)=>{
    ProductCategory.find()
        .then(exercise=>res.json(exercise))
        .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=>{
    ProductCategory.findByIdAndDelete(req.params.id)
        .then(storemanager=>res.json('product category delete'))
        .catch(err=>res.status(400).json('Error: '+err));
});



router.route('/update/:id').post((req,res)=>{
    ProductCategory.findById(req.params.id)
        .then(productcategory=>{
            productcategory.categoryName=req.body.categoryName;
            productcategory.categoryDiscription=req.body.categoryDiscription;
            productcategory.categoryNote=req.body.categoryNote;
            
            productcategory.save()
            .then(productcategory=>res.json('productcategory updated'))
            .catch(err=>res.status(400).json('Error: '+err));
        })
        .catch(err=>res.status(400).json('Error: '+err));
});






module.exports = router;