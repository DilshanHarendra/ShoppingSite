const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');

router.use(bodyParser());
router.use(core());

let StoreManager = require('../schemas/StoreManagerSchema');

// router.post('/add',function(rqs,res){
//     const body = rqs.body
//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a StoreManager',
//         })
//     }

//     const storeManager = new StoreManager(body);

//     if (!storeManager) {
//         return res.status(400).json({ success: false, error: err })
//     }

//     storeManager.save().then(() => {
//             return res.status(201).json({
//                 success: true,
//                 id: storeManager._id,
//                 message: 'Store Manager created!',
//             })
//         })
//         .catch(error => {
//             return res.status(400).json({
//                 error,
//                 message: 'Store Manager not created!',
//             })
//         })


   
// });


router.route('/add').post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const birthDay=req.body.birthDay;
    const password =req.body.password
    const emailAddress=req.body.email;
    const telephoneNumber=req.body.telephonenumber;

    const newStoreManager=new StoreManager({
        firstName,
        lastName,
        password,
        emailAddress,
        birthDay,
        telephoneNumber
    })

    newStoreManager.save()
        .then(newStoremanager=>res.json('new store manager added'))
        .catch(err=>res.status(400).json('Error in Create new Store manager '+err));


});





module.exports = router;