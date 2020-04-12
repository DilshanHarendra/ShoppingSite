const express=require('express');
const router=express.Router();
const uniqid=require('uniqid');
const bodyParser=require('body-parser');
const core = require('cors');
const UserSchema=require('../schemas/UserSchema');

router.use(bodyParser());
router.use(core());
var UID;

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


}catch(e)
{

}
});
module.exports = router;