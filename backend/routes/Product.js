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
    res.send("product root");
});

router.use(bodyParser());
router.use(fileUpload());

router.get('/getProducts',async function (req,res) {

    try {
        if (req.query.s){
            delete req.query.s;
            var data=await productSchema.find(req.query);
            res.send( JSON.stringify(data));
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
    delete req.body['files'];
    pId=uniqid()
    req.body['id']=pId;
    req.body['addDate']=new Date();
    var data=req.body;
    console.log(data);
  const newProduct = new productSchema(data);
   await newProduct.save(function (err, product) {
        if (err) {
            console.error(err);
            res.status(500).send( "Eroor"+err);
        }
        console.log(product.proName + " saved");
        res.redirect('/product/sucess');
    });

});

router.post('/uploadProduct',async (req, res) => {
    try{
        if (req.files.file.length>1){
            req.files.file.forEach(data=>{
                if (data === null) {
                     res.status(400).json({ msg: 'No file uploaded' });
                }else{
                    data.mv(`${__dirname}/../uploads/products/${pId}_${data.name}`, err => {
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
                            res.send(pId);
                        }
                    });
                }
            });


        }else{
            const data=req.files.file;
            if (data === null) {
                 res.status(400).json({ msg: 'No file uploaded' });
            }else{
                data.mv(`${__dirname}/../uploads/products/${pId}_${data.name}`, err => {
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
                        console.log("send responce "+pId);
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