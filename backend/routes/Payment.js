//payment controller
const express = require('express');
const router = express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const sessions = require('express-session');
//const PaymentSchema=require('../schemas/PaymentSchema');

var session;

router.use(bodyParser.json());
router.use(core());
router.use(bodyParser.urlencoded({extended:true}));

router.use(sessions({
    secret: '#%#%#%#$%$#&%#@#$#@@',
    resave: false,
    saveUninitialized: true
}));

router.get('/',function (req,res) {
    res.sendFile('./views/pages/Payment/payDummyLogin', {root:__dirname});
});

// router.get('/login',async function (req,res) {
//     res.sendFile('./views/pages/Payment/payDummyLogin', {root:__dirname});
// });

router.post('/login',async function (req,res) {
    //res.end(JSON.stringify(req.body));
    session = req.session;
    if(req.body.username === 'admin' && req.body.password === 'admin'){
        session.uniqueId=req.body.username;
    }

    res.redirect('/redirects');
});

router.get('/redirects', function(req, res) {
    session = req.session;
    if(session.uniqueId)
    {
        res.redirect('/admin')
    }else
    {
        res.end("Unauthorized")
    }
});
module.exports = router;