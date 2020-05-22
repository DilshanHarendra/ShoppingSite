const express=require('express');
const router=express.Router();
const uniqid=require('uniqid');
const bodyParser=require('body-parser');
const core = require('cors');
const UserSchema=require('../schemas/UserSchema');
const DeleteUserSchema=require('../schemas/DeletedUserSchema');
//const bycrpt=require('bcrypt');
const crypto=require('crypto');
const nodemailer=require('nodemailer');
router.use(bodyParser());
router.use(core());
var UID;

router.post('/addUser',async function(req,res){

try{

  var data=await  UserSchema.findOne({Username:req.body.Username});
  var data1=await  UserSchema.findOne({email:req.body.email});
 
  if(data===null || data1===null)
  {

    var newQuery=[];
    UID=uniqid();

    newQuery=req.body;
    newQuery['uid']=UID;
    newQuery['regDate']=new Date();
    newQuery['isdeleted']=false;
    newQuery['mobile']="",
    newQuery['nic']="",
    newQuery['address1']="",
    newQuery['address2']="",
    newQuery['city']="",    
   // token=await bycrpt.hash(UID+new Date(),10);
   
   token=await crypto.createHash('md5').update(UID+new Date()).digest('hex');

    const newUser=new UserSchema(newQuery);
    await newUser.save(async function(err,product){

        if (err) {
            console.error(err);
            res.status(500).send( "Eroor"+err);
        }else{
          try{
   
console.log("befire")
            let testAccount = await nodemailer.createTestAccount();
console.log("after")
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 465,
              secure: true, // true for 465, false for other ports
              auth: {
                user: "codefoursliit@gmail.com", // generated ethereal user
                pass: "codefour@123", // generated ethereal password
              },
            });
            var email=await product.email;
            console.log(email)
          console.log("transport visited")
            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: '"C4fashions" <codefoursliit@gmail.com>', // sender address
              to: email, // list of receivers
              subject: "complete user registration", // Subject line
              text:
                "http://localhost:3000/RegisterConfirm?token="+token+"&user_id="+product._id+"", // plain text body
              html: '<a href="http://localhost:3000/RegisterConfirm?token='+token+'&user_id='+product._id+'">Click to register</a>',
             
          
            });
          
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

            res.json({success:true});
        
          }catch(e)
          {
            console.log(e)
            res.json({success:false});
          }
        }



    });
  }else{

    res.json({success:false,err:"There is a user with this email or username"});
  }

}catch(e)
{
  console.log(e);
  res.send(e);
}
});

router.route('/addtoken').post((req,res)=>{
 

      UserSchema.findByIdAndUpdate(req.body.id,{
 
        "newPassword":req.body.newPassword,
        "token":req.body.token
    },(err,user)=>res.send("updated"))
});





router.route('/updateuser').post((req,res)=>{
 

  UserSchema.findByIdAndUpdate(req.body.id,{

    "Fullname":req.body.Fullname,
      "mobile":req.body.mobile,
      "nic":req.body.nic,
      "Username":req.body.Username,
      "address1":req.body.address1,
      "address2":req.body.address2,
      "city":req.body.city,
},(err,user)=>res.send("updated"))
});



router.route('/updatepass').post((req,res)=>{
 
 

  UserSchema.findByIdAndUpdate(req.body.id,{

    "newPassword":req.body.newPassword,
      
},(err,user)=>res.send("updated"))
});


router.get("/getuserbyid",async function(req,res){
console.log("visited function")
  var data=await UserSchema.find(req.query);

  if(data===null)
  {
    res.json({success:false,err:"no id"})
  }else{

res.json({success:false,data:data})
  }


})


router.post("/removeuser",async function(req,res){


  let data = await UserSchema.find({_id:req.body.id});

  let addDelete = [];
  data.forEach((details) => {
    addDelete = ({
      uid: details._id,
        Fullname: details.Fullname,
        Username: details.Username,
        email: details.email,
        type: details.type,
        mobile: details.mobile,
        nic: details.nic,
        address1: details.address1,
        address2: details.address2,
        city: details.city,
        isdeleted: "true",
        reason: req.body.reason,
       
    })

});

const deleteUser=new DeleteUserSchema(addDelete);

await deleteUser.save(async function(err,deluser) {
  if (err){
      console.log(err + "Error adding");
  }
  else
  {
      console.log(deluser.Fullname + " User added successfully");
  }
})

var removeRefund = await UserSchema.deleteOne({_id:req.body.id});
if(removeRefund===null)
{
  res.json("error");
}else{
  res.json("success");
}

})


router.get("/", function (req, res) {
    res.send("hello");
  });

module.exports = router;