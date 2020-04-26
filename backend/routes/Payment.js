//payment controller
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser =require('body-parser');

router.get('/',function (req,res) {
    res.send("Payment root");
});

router.get('/login',async function (req,res) {
    res.send("Payment login");
});

router.post('/login',async function (req,res) {
    res.send("Payment login");
});

module.exports = router;