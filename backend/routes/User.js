const express=require('express');
require('dotenv').config();
const router=express.Router();
const uniqid=require('uniqid');
const bodyParser=require('body-parser');
const core = require('cors');
const UserSchema=require('../schemas/UserSchema');

const jwt=require('jsonwebtoken');

router.use(bodyParser());
router.use(core());
var UID;


router.post('/login',async function (req,res) {

    var pass=req.body.newPassword.trim();
     var data=await  UserSchema.findOne({Username:req.body.Username});

     if (data==null){
            res.status(403).send("Username Incorrect");
        }else {
            if (data.newPassword.trim()==pass){
                const accTocken=data['accTocken'].trim();
                jwt.verify(accTocken,process.env.ACCESS_TOKEN_SECRET,(err,response)=>{
                    if (err){
                        res.status(403).send("invalid Tocken "+err);
                    }else {
                        res.send(response);
                    }
                });
            }else{
                res.status(403).send("Password Incorrect");
            }
        }

});

router.post('/register',async  function (req, res) {

     var accToken= await generateAccTocken(req.body.Username);
    req.body['accTocken']=accToken;
    const query = new UserSchema(req.body);
    await query.save(function (err,user) {
        if (err){
            res.status(500).send(err);
        }else{
            res.send(user);
        }

    })

});

function  generateAccTocken(username){
    const user={name:username};
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
    console.log(accessToken);
    return accessToken;
}









router.post('/addUser',async function(req,res){

    try{

        var newQuery=[];
        UID=uniqid();

        newQuery=req.body;
        newQuery['uid']=UID;
        newQuery['regDate']=new Date();

        const newUser=new UserSchema(newQuery);
        await newUser.save(function(err,product){

            if (err) {
                console.error(err);
                res.status(500).send( "Eroor"+err);
            }

        });


    }catch(e){

    }
});





router.get('/checkEmail',async function(req,res){


});
module.exports = router;