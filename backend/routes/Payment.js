//payment controller
const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const bodyParser =require('body-parser');
const core = require('cors');
const PaymentSchema=require('../schemas/PaymentSchema');
const SecretCode=require('../schemas/PaymentSecretCodeSchema');
const RefundPayment=require('../schemas/PaymentRefundSchema');
const OrderSchema=require('../schemas/OrderSchema');
const UserSchema = require('../schemas/UserSchema');
const nodemailer = require('nodemailer');
router.use(bodyParser());
router.use(core());
var payUID;
var rn = require('random-number');

router.post('/addCardPayment',async function(req,res){


    try {
        let gotData = req.body.orderID;
        let query = {_id: gotData};
        let data = await OrderSchema.find(query);

        let dataOrder = [];

        data.forEach((details) => {
            dataOrder = ({
                userID : details.user_id,
                payAmount : details.totalAmaount
            })
        });

            payUID = uniqid();
            const payID = payUID;
            const userID = dataOrder.userID;
            const orderID = req.body.orderID;
            const payAmount = dataOrder.payAmount;
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
            const receiptNumber = req.body.receiptNumber;


        const data1 =({
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
            receiptNumber: receiptNumber
        });


        const NewPayment=new PaymentSchema(data1);

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

        let userID1 = dataOrder.userID;
        let query2 = {_id: userID1};
        let data2 = await UserSchema.find(query2);

        let fromUser = [];

        data2.forEach((details) => {
            fromUser = ({
                email: details.email
            })
        });

        var options = {
            min:  123456
            , max:  999999
            , integer: true
        };
        let code = rn(options);

        const storeData =({
            secretID: code
        });

        const NewSecret=new SecretCode(storeData);

        await NewSecret.save(async function(err,payment) {
            if (err){
                console.log(err + "This is the error");
            }
            else
            {
                console.log("Secret code added successfuly");
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
            to: fromUser.email, // list of receivers
            subject: "Two step verification", // Subject line
            text:
                "Please find the below secret code:",
            html: '<label class="text-dark">Your code is <span class="text-danger font-weight-bold">=='+code+'==</span></label>'

        });

    }catch (e) {
        
    }

});



router.post('/addBankPayment',async function(req,res){

    try {

        let gotData = req.body.orderID;
        let query = {_id: gotData};
        let data = await OrderSchema.find(query);

        let dataOrder = [];

        data.forEach((details) => {
            dataOrder = ({
                userID : details.user_id,
                payAmount : details.totalAmaount
            })
        });

        payUID = uniqid();
        const payID = payUID;
        const userID = dataOrder.userID;
        const orderID = req.body.orderID;
        const payAmount = dataOrder.payAmount;
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
        const receiptNumber = req.body.receiptNumber;


        const data1 =({
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
            depositedDate: depositedDate,
            receiptNumber:receiptNumber
        });


        const NewBankPayment=new PaymentSchema(data1);

        await NewBankPayment.save(async function(err,payment) {
            if (err){
                console.log(err + "This is the error");
            }
            else
            {
                console.log(payment.payID + " added successfuly");
            }
        })

        let userID1 = dataOrder.userID;
        let query2 = {_id: userID1};
        let data2 = await UserSchema.find(query2);

        let fromUser = [];

        data2.forEach((details) => {
            fromUser = ({
                email: details.email
            })
        });

        var options = {
            min:  123456
            , max:  999999
            , integer: true
        };
        let code = rn(options);

        const storeData =({
            secretID: code
        });

        const NewSecret=new SecretCode(storeData);

        await NewSecret.save(async function(err,payment) {
            if (err){
                console.log(err + "This is the error");
            }
            else
            {
                console.log("Secret code added successfuly");
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
            to: fromUser.email, // list of receivers
            subject: "Two step verification", // Subject line
            text:
                "Please find the below secret code:",
            html: '<label class="text-dark">Your code is <span class="text-danger font-weight-bold">=='+code+'==</span></label>'

        });

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

router.post('/getAllPaymentDetails',async function(req,res){
    try{
        var gotData = req.body.userID;
        var data=await PaymentSchema.find({userID: gotData});
        res.send(data);
    }catch (e) {
        res.status(404).send("parameter error");
    }

});

router.get('/getCardPaymentDetails',async function(req,res){
    try{
        var query = {payType: 'Card'};
        var data=await PaymentSchema.find(query);
        res.send(data);
    }catch (e) {
        res.status(404).send("parameter error");
    }

});

router.get('/getBankPaymentDetails',async function(req,res){
    try{
        var query = {payType: 'Bank'};
        var data=await PaymentSchema.find(query);
        res.send(data);
    }catch (e) {
        res.status(404).send("parameter error");
    }

});

router.post('/getDataForInvoice',async function(req,res){
    try{
        let gotData = req.body.payID;
        console.log(gotData);
        let query = {payID: gotData};
        let data=await PaymentSchema.find(query);

        res.send(data);
    }catch (e) {
        res.status(404).send("parameter error");
    }

});

router.post('/changeCardStatus',async function(req,res){
    try{
        //get user email
        const userID = req.body.id1;
        const gotID = req.body.id;
        let query1 = {_id: userID};
        let data1 = await UserSchema.find(query1);

        let fromUser = [];

        data1.forEach((details) => {
            fromUser = ({
                email: details.email
            })
        });

        var updatePaymentStatus = {
            paymentStatus :'Completed'
        };
        var result =await PaymentSchema.updateOne({payID:gotID},updatePaymentStatus);

        console.log("Status changed to Completed");

        let testAccount1 = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter1 = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "codefoursliit@gmail.com", // generated ethereal user
                pass: "codefour@123", // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info1 = await transporter1.sendMail({
            from: '"C4 Fashions" <codefoursliit@gmail.com>', // sender address
            to: fromUser.email, // list of receivers
            subject: "Payment completion", // Subject line
            text:
                "Your below payment is completed:",
            html: '<label class="text-dark">Your payment: <span class="text-danger font-weight-bold">=='+gotID+'==</span> has been completed</label><br>'
                +
                '<a href="http://localhost:3000/payInvoice?getInvoice='+gotID+'">Click to get the receipt</a>'

        });
        console.log("Sent to " + userEmail);
    }catch (e) {
        res.status(404).send("parameter error");
        console.log(e);
    }

});

router.post('/getRefundPaymentDetails',async function(req,res){
    try{
        var gotData = req.body.userID;
        var query = {refundRequest: true, paymentStatus: 'Processing', userID: gotData};
        var data=await PaymentSchema.find(query);
        res.send(data);
    }catch (e) {
        res.status(404).send("parameter error");
    }

});

router.get('/getRefundPaymentDetailsForAdmin',async function(req,res){
    try{
        var query = {refundRequest: true, paymentStatus: 'Processing'};
        var data=await PaymentSchema.find(query);
        res.send(data);
    }catch (e) {
        res.status(404).send("parameter error");
    }

});

router.post('/acceptRefund',async function(req,res){
    try{
        const userID = req.body.id1;
        const gotID = req.body.id;
        let query1 = {_id: userID};
        let data1 = await UserSchema.find(query1);

        let fromUser = [];

        data1.forEach((details) => {
            fromUser = ({
                email: details.email
            })
        });

        var updatePaymentStatus = {
            paymentStatus :'Refunded'
        };
        var result =await PaymentSchema.updateOne({payID:gotID},updatePaymentStatus);

        var query = {payID: gotID};
        const data=await PaymentSchema.find(query);

        let addRefund = [];
        data.forEach((details) => {
            addRefund = ({
                payID: details.payID,
                userID: details.userID,
                orderID: details.orderID,
                payAmount: details.payAmount,
                payDate: details.payDate,
                payType: details.payType,
                paymentStatus: details.paymentStatus,
                refundRequest: details.refundRequest,
                payReceipt: details.payReceipt,
                cardNumber: details.cardNumber,
                cardCSV: details.cardCSV,
                cardType: details.cardType,
                cardHolderName: details.cardHolderName,
                cardExpireDate: details.cardExpireDate,
                bankName: null,
                bankBranch: null,
                depositedAmount: null,
                depositedDate:null,
                receiptNumber:null
            })

        });

        const newRefunded = new RefundPayment(addRefund);

        await newRefunded.save(async function(err,payment) {
            if (err){
                console.log(err + "This is the error");
            }
            else
            {
                console.log(payment.payID + " refund added successfuly");
            }
        })

        var removeRefund = await PaymentSchema.deleteOne(query);

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
            to: fromUser.email, // list of receivers
            subject: "Refund request acceptance", // Subject line
            text:
                "Your below refund payment is completed:",
            html: '<label class="text-dark">Your refund request: <span class="text-danger font-weight-bold">=='+gotID+'==</span> has been completed</label>'

        });
    }catch (e) {
        res.status(404).send("parameter error");
    }

});

router.post('/getOrderDetails',async function(req,res){
    try{

        let gotData = req.body.orderID;
        console.log(gotData);
        let query = {_id: gotData};
        let data=await OrderSchema.find(query);

        // let sendData = [];
        //
        // data.forEach((details) => {
        //     sendData = ({
        //         _id: details._id,
        //         numberOfItem: details.numberOfItem,
        //         totalAmaount: details.totalAmaount,
        //         orderCreateDate: details.orderCreateDate,
        //         user_id: details.user_id
        //     })
        //
        // });
        //
        // res.send(sendData);

        res.send(data);
    }catch (e) {
        res.status(404).send("parameter error");
    }

});


module.exports = router;