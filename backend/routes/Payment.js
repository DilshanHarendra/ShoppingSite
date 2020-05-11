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


router.get('/login',async function (req,res) {
     session = req.session;
     if(session.uniqueId)
     {
         res.redirect('/Payment/login')
     }
     res.send(false);
});

router.post('/login',async function (req,res) {
    //res.end(JSON.stringify(req.body));
    session = req.session;
    if(session.uniqueId)
    {
        res.send(true);
    }
    if(req.body.username === 'admin' && req.body.password === 'admin'){
        session.uniqueId=req.body.username;
    }
    res.redirect('/Payment/redirects');
});

router.get('/redirects', function(req, res) {
    session = req.session;
    if(session.uniqueId)
    {
        res.send(true)
    }else
    {
        res.send(false)
    }
});

module.exports = router;