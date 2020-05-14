//payment controller
const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const bodyParser =require('body-parser');
const core = require('cors');
const PaymentSchema=require('../schemas/PaymentSchema');
const SecretCode=require('../schemas/PaymentSecretCodeSchema');
const nodemailer=require('nodemailer');
router.use(bodyParser());
router.use(core());
var payUID;

router.post('/addCardPayment',async function(req,res){
    
    try {
        payUID = uniqid();
        const payID = payUID;
        const userID = req.body.userID;
        const orderID = req.body.orderID;
        const payAmount = req.body.payAmount;
        const payDate = req.body.payDate;
        const payType = 'Card';
        const paymentStatus = 'Processing';
        const refundRequest = false;
        const cardNumber = req.body.cardNumber;
        const cardCSV = req.body.cardCSV;
        const cardHolderName = req.body.cardHolderName;
        const expireDate = req.body.expireDate;
        const cardType = req.body.cardType;
        const payReceipt = req.body.payReceipt;

        const data =({
            payID: payID,
            userID: userID,
            orderID: orderID,
            payAmount: payAmount,
            payDate: payDate,
            payType: payType,
            paymentStatus: paymentStatus,
            refundRequest: refundRequest,
            payReceipt: payReceipt,
            cardNumber: cardNumber,
            cardCSV: cardCSV,
            cardType: cardType,
            cardHolderName: cardHolderName,
            cardExpireDate: expireDate
        });


        const NewPayment=new PaymentSchema(data);

        console.log(NewPayment);

        await NewPayment.save(async function(err,payment) {
            if (err){
                console.log(err + "This is the error");
            }
            else
            {
                console.log(payment.payID + " added successfuly");
            }
        })
    }catch (e) {
        
    }

});

router.post('/emailVerification',async function(req,res){

    try{
        const code = 123456;
        const getEmail = req.body.email;

        const data =({
            secretID: code
        });

        const NewSecret=new SecretCode(data);

        await NewSecret.save(async function(err,payment) {
            if (err){
                console.log(err + "This is the error");
            }
            else
            {
                console.log(payment.payID + " added successfuly");
            }
        });

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
            from: '"C4 Fashions" <codefoursliit@gmail.com>', // sender address
            to: getEmail, // list of receivers
            subject: "Two step verification", // Subject line
            text:
                "Please find the below secret code:",
            html: '<label class="text-dark">Your code is <span class="text-danger font-weight-bold">'+code+'</span></label>'

        });

        // res.sendFile('/getVerifyCode', code);
    }catch (e) {

    }

});

// router.get('/getVerifyCode',async function(req,res){
//
//     try{
//         const codeToSend = req.body.code;
//         res.send(codeToSend);
//     }catch (e) {
//
//     }
//
// });

router.post('/addBankPayment',async function(req,res){

    try {
        payUID = uniqid();
        const payID = payUID;
        const userID = req.body.userID;
        const orderID = req.body.orderID;
        const payAmount = req.body.payAmount;
        const payDate = req.body.payDate;
        const payType = 'Bank';
        const paymentStatus = 'Processing';
        const refundRequest = false;
        const cardNumber = req.body.cardNumber;
        const cardCSV = req.body.cardCSV;
        const cardHolderName = req.body.cardHolderName;
        const expireDate = req.body.expireDate;
        const cardType = req.body.cardType;
        const payReceipt = req.body.payReceipt;
        const bankName = req.body.bankName;
        const bankBranch = req.body.bankBranch;
        const depositedAmount = req.body.depositedAmount;
        const depositedDate = req.body.depositedDate;


        const data =({
            payID: payID,
            userID: userID,
            orderID: orderID,
            payAmount: payAmount,
            payDate: payDate,
            payType: payType,
            paymentStatus: paymentStatus,
            refundRequest: refundRequest,
            payReceipt: payReceipt,
            cardNumber: cardNumber,
            cardCSV: cardCSV,
            cardType: cardType,
            cardHolderName: cardHolderName,
            cardExpireDate: expireDate,
            bankName: bankName,
            bankBranch: bankBranch,
            depositedAmount: depositedAmount,
            depositedDate: depositedDate
        });


        const NewBankPayment=new PaymentSchema(data);

        await NewBankPayment.save(async function(err,payment) {
            if (err){
                console.log(err + "This is the error");
            }
            else
            {
                console.log(payment.payID + " added successfuly");
            }
        })
    }catch (e) {

    }

});


router.get('/getUserCardPayments',async function(req,res){

    try{
        var query = {payType: 'Card'};
        var data=await PaymentSchema.find(query);
        res.send(data);
    }catch (e) {
        res.status(404).send("parameter error");
    }

});

router.post('/refundRequest',async function(req,res){

    try{
        const searchID = req.body.id;
        console.log(searchID);
        var updateRefundStatus = {
            refundRequest   : true
        };
        var query = {payID: searchID};
        var data=await PaymentSchema.find(query);
        var result =await PaymentSchema.updateOne({payID:searchID},updateRefundStatus);
        if(result.ok == 1){
            console.log("Status update is successful");
            res.send(data);
        }else{
            console.log("Eroor!!!! Status update is unsuccessful");
            res.status(404).send("parameter error");
        }

    }catch (e) {
        res.status(404).send("parameter error");
    }

});

router.get('/getSecretCode',async function(req,res){
    try{
        var data=await SecretCode.findOne();
        res.send(data);
    }catch (e) {
        res.status(404).send("parameter error");
    }finally {
        console.log("This is finally");
        // let dropall =await SecretCode.deleteOne();
        console.log("This is drop all "+dropall);

    }

});

router.post('/removeSecretCode',async function(req,res){
    try{
        let dropall =await SecretCode.deleteOne();
        console.log("Secret codes are deleted!!!");
    }catch (e) {
        res.status(404).send("parameter error");
    }

});

module.exports = router;