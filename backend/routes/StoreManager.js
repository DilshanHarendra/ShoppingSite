const express = require('express');
const router =express.Router();
const uniqid = require('uniqid');
const bodyParser =require('body-parser');
const fileUpload = require('express-fileupload');
const core = require('cors');
const fs= require('fs')

const storeManager = require('../schemas/StoreManagerSchema');




module.exports = router;