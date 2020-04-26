const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');

router.use(bodyParser());
router.use(core());

let StoreManager = require('../schemas/StoreManagerSchema');


router.route('/add').post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const birthDay=req.body.birthDay;
    const password =req.body.password;
    const emailAddress=req.body.email;
    const address=req.body.address;
    const telephoneNumber=req.body.telephonenumber;

    const newStoreManager=new StoreManager({
        firstName,
        lastName,
        password,
        emailAddress,
        birthDay,
        address,
        telephoneNumber
    })

    newStoreManager.save()
        .then(newStoremanager=>res.json('new store manager added'))
        .catch(err=>res.status(400).json('Error in Create new Store manager '+err));


});

router.route('/:id').delete((req,res)=>{
    StoreManager.findByIdAndDelete(req.params.id)
        .then(storemanager=>res.json('storemanager delete'))
        .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    StoreManager.findById(req.params.id)
        .then(exercise=>res.json(exercise))
        .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/').get((req,res)=>{
    StoreManager.find()
        .then(exercise=>res.json(exercise))
        .catch(err=>res.status(400).json('Error: '+err));
});



router.route('/update/:id').post((req,res)=>{
    StoreManager.findById(req.params.id)
        .then(storemaager=>{
            storemaager.firstName=req.body.firstName;
            storemaager.lastName=req.body.lastName;
            storemaager.birthDay=req.body.birthDay;
            storemaager.password =req.body.password;
            storemaager.emailAddress=req.body.email;
            storemaager.telephoneNumber=req.body.telephonenumber;
            storemaager.save()
            .then(user=>res.json('storemanager updated'))
            .catch(err=>res.status(400).json('Error: '+err));
        })
        .catch(err=>res.status(400).json('Error: '+err));
});



module.exports = router;