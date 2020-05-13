const express=require('express');
const router=express.Router();
const uniqid=require('uniqid');
const bodyParser=require('body-parser');
const core = require('cors');
const UserSchema=require('../schemas/UserSchema');
//const bycrpt=require('bcrypt');
const crypto=require('crypto');
const nodemailer=require('nodemailer');
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

   // token=await bycrpt.hash(UID+new Date(),10);
   
   token=crypto.createHash('md5').update(UID+new Date()).digest('hex');

    const newUser=new UserSchema(newQuery);
    await newUser.save(async function(err,product){

        if (err) {
            console.error(err);
            res.status(500).send( "Eroor"+err);
        }else{


            let testAccount = await nodemailer.createTestAccount();

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
          
            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: '"Code4 Fire sensor system ??" <codefoursliit@gmail.com>', // sender address
              to: product.email, // list of receivers
              subject: "Alert Important", // Subject line
              text:
                "http://localhost:3000/RegisterConfirm?token="+token+"&user_id="+product._id+"", // plain text body
              html: '<a href="http://localhost:3000/RegisterConfirm?token='+token+'&user_id='+product._id+'">Click to register</a>',
             
          
            });
          
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          
        }



    });


}catch(e)
{

}
});

router.route('/addtoken').post((req,res)=>{
  UserSchema.findById(req.params.id)
      .then(usercatergory=>{
       
         
          console.log(usercatergory.Fullname)
          res.send( usercatergory.Fullname)
      })
      .catch(err=>res.status(400).json('Error: '+err));
});




router.get("/", function (req, res) {
    res.send("hello");
  });

module.exports = router;