const express = require('express');
const router =express.Router();
const uniqid = require('uniqid');
const bodyParser =require('body-parser');
const fileUpload = require('express-fileupload');
const core = require('cors');
var MongoClient = require('mongodb').MongoClient;

const mogoose=require('mongoose');

const productSchema = require('../schemas/ProductSchema');

var pId;
router.get('/',function (req,res) {
    res.send("product root");
});

router.use(bodyParser());
router.use(fileUpload());
router.use(core());
router.get('/getProducts',async function (req,res) {

    try {
        if (req.query.s){
            delete req.query.s;
            var data=await productSchema.find(req.query);
            res.send( data);
        }else {
            res.status(500).send("query err");
        }
    }catch (e) {
        console.log(e);
        res.status(500).send("err " + e);
    }
});

router.get('/getProduct',async function (req,res) {

    try {
        if (req.query.s){
            delete req.query.s;
            var data=await productSchema.find(req.query);
            res.send( data);
        }else {
            res.status(500).send("query err");
        }
    }catch (e) {
        console.log(e);
        res.status(500).send("err " + e);
    }
});





router.post('/addProduct',async function (req,res) {
    console.log("methode call");
    var newQuery=[];
    pId=uniqid()
    let productImages =[];
    req.body['proimages'].forEach(img=>{
        productImages=['/uploads/products/'+pId+'_'+img,...productImages]
    });

    newQuery['proName']=req.body['proName'];
    newQuery['catogory']=req.body['catogory'];
    newQuery['subCatogory']=req.body['subCatogory'];
    newQuery['size']=req.body['size'];
    newQuery['brand']=req.body['brand'];
    newQuery['quantity']=req.body['quantity'];
    newQuery['condition']=req.body['condition'];
    newQuery['description']=req.body['description'];
    newQuery['price']=req.body['price'];
    newQuery['shipping']=req.body['shipping'];
    newQuery['discount']=req.body['discount'];
    newQuery['sellerID']=req.body['sellerID'];
    newQuery['id']=pId;
    newQuery['addDate']=new Date();
    newQuery['images']=productImages;

    console.log(newQuery);

try {
    const newProduct = new productSchema(newQuery);
    await newProduct.save(function (err, product) {
        if (err) {
            console.error(err);
            res.status(500).send( "Eroor"+err);
        }
        console.log(product.proName + " saved");
        res.redirect('/product/sucess');
    });
}catch (e) {

}


});

router.post('/uploadProduct',async (req, res) => {
    try{
        if (req.files.file.length>1){
            req.files.file.forEach(data=>{
                if (data === null) {
                     res.status(400).json({ msg: 'No file uploaded' });
                }else{
                    data.mv(`./uploads/products/${pId}_${data.name}`, err => {
                        if (err) {
                            console.log("cannot upload "+err);
                            productSchema.deleteOne({'id':pId},function (err) {
                                if (err){
                                    console.log("error"+err);
                                     res.status(500).send(err);
                                }else{
                                     res.status(500).send(err);
                                }

                            });

                        }else{

                        }
                    });
                }
            });
            res.send(pId);
        }else{
            const data=req.files.file;

            if (data === null) {
                 res.status(400).json({ msg: 'No file uploaded' });
            }else{
                data.mv(`./uploads/products/${pId}_${data.name}`,async err => {
                    if (err) {
                        console.log("cannot upload "+err);
                        productSchema.deleteOne({'id':pId}, function (err) {
                            if (err){
                                console.log("error"+err);
                                 res.status(500).send(err);
                            }else{
                                 res.status(500).send(err);
                            }

                        });
                    }else{
                   res.send(pId);

                    }
               });
            }
        }

    }catch (e) {
        console.log(e);
    }
});

router.get('/sucess',function (req,res) {
    res.send({resp:"ok"});
});








module.exports = router;