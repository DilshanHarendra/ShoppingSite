//payment controller
const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const bodyParser =require('body-parser');
const core = require('cors');
const sessions = require('express-session');
const PaymentSchema=require('../schemas/PaymentSchema');
const nodemailer=require('nodemailer');
router.use(bodyParser());
router.use(core());
var payUID;

router.route('/addCardPayment').post((req,res)=>{
    payUID=uniqid();
    const payID=payUID;
    const userID=req.body.userID;
    const orderID=req.body.orderID;
    const payAmount=req.body.payAmount;
    const payDate =req.body.payDate;
    const payType="Card";
    const cardNumber=req.body.cardNumber;
    const cardCSV=req.body.cardCSV;
    const cardHolderName=req.body.cardHolderName;
    const expireDate=req.body.expireDate;
    const cardType=req.body.cardType;
    const payReceipt=req.body.payReceipt;

    const NewPayment=new PaymentSchema({
        payID,
        userID,
        orderID,
        payAmount,
        payDate,
        payType,
        payReceipt,
        cardNumber,
        cardCSV,
        cardType,
        cardHolderName,
        expireDate
    });

    NewPayment.save()
        .then(NewPayment=>res.json('Payment successful'))
        .catch(err=>res.status(400).json('Error!!! Payment unsuccessful!!!'+err));

});


module.exports = router;