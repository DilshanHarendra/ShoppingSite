const express = require('express');
const router =express.Router();
const uniqid = require('uniqid');
const bodyParser =require('body-parser');
const fileUpload = require('express-fileupload');
var MongoClient = require('mongodb').MongoClient;

const mogoose=require('mongoose');
const productSchema = require('../schemas/ProductSchema');

var pId;
router.get('/',function (req,res) {
   //  res.send("product root");

    pId=uniqid();
const add = new productSchema({
    productName:"dila",
    catogory:"men",
    quantity:20,
    condition:"used",
    description:"this is test",
    price:11000,
    shipping:10,
    discount:5,
    id:pId

});
    add.save(function (err, product) {
        if (err) {
            console.error(err);
            res.status(500).send(product.productName + " saved to product.");
        }
        console.log(product.productName + " saved to bookstore collection.");
        res.redirect('/product/sucess');
    });



});

router.use(bodyParser());
router.use(fileUpload());




router.get('/getProducts',async function (req,res) {

        productSchema.find({},function (err,data) {
            if (err){
               // console.log("error"+err);
                res.send("error"+err);
            }else {
                //console.log(data);
                res.send(data);
            }

        });



});
router.post('/addProduct',async function (req,res) {
    console.log("methode call");
    delete req.body['files'];
    pId=uniqid()
    req.body['id']=pId;
    var data=req.body;
    console.log(data);
  const newProduct = new productSchema(data);
   await newProduct.save(function (err, product) {
        if (err) {
            console.error(err);
            res.status(500).send( "Eroor"+err);
        }
        console.log(newProduct.proName + " saved");
        res.redirect('/product/sucess');
    });

});

router.post('/uploadProduct', (req, res) => {
    try{
        if (req.files.file.length>1){
            req.files.file.forEach(data=>{
                if (data === null) {
                    return res.status(400).json({ msg: 'No file uploaded' });
                }else{
                    data.mv(`${__dirname}/../../client/public/uploads/${pId}_${data.name}`, err => {
                        if (err) {
                            console.log("cannot upload "+err);
                            productSchema.deleteOne({'id':pId},function (err) {
                                if (err){
                                    console.log("error"+err);
                                    return res.status(500).send(err);
                                }
                                return res.status(500).send(err);
                            });

                        }
                    });
                }
            });

            res.redirect('/product/sucess');
        }else{
            const data=req.files.file;
            if (data === null) {
                return res.status(400).json({ msg: 'No file uploaded' });
            }else{
                data.mv(`${__dirname}/../../client/public/uploads/${pId}_${data.name}`, err => {
                    if (err) {
                        console.log("cannot upload "+err);
                        productSchema.deleteOne({'id':pId},function (err) {
                            if (err){
                                console.log("error"+err);
                                return res.status(500).send(err);
                            }
                            return res.status(500).send(err);
                        });
                    }
                    res.redirect(pId);

                });
            }
        }

    }catch (e) {
        console.log(e);
    }
});

router.get('/sucess',function (req,res) {
    res.send({resp:'ok'});
});








module.exports = router;