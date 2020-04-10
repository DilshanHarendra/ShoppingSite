const express = require('express');
const router =express.Router();
const uniqid = require('uniqid');
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');

router.use(bodyParser());
router.use(core());

const StoreManager = require('../schemas/StoreManagerSchema');

router.post('/create',function(rqs,res){
    const body = rqs.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a StoreManager',
        })
    }

    const storeManager = new StoreManager(body);

    if (!storeManager) {
        return res.status(400).json({ success: false, error: err })
    }

    storeManager.save().then(() => {
            return res.status(201).json({
                success: true,
                id: storeManager._id,
                message: 'Store Manager created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Store Manager not created!',
            })
        })


   
});

router.get('/storemanager',async function(rqs,res){
   res.send('hi')

});




module.exports = router;