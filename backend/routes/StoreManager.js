const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');

router.use(bodyParser());
router.use(core());

let StoreManager = require('../schemas/StoreManagerSchema');

//Add new storemanager
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
    });

    newStoreManager.save()
        .then(newStoremanager=>res.json('new store manager added'))
        .catch(err=>res.status(400).json('Error in Create new Store manager '+err));


});

//Delete selected product
router.route('/:id').delete((req,res)=>{
    StoreManager.findByIdAndDelete(req.params.id)
        .then(storemanager=>res.json('storemanager delete'))
        .catch(err=>res.status(400).json('Error: '+err));
});

//get selected storemanager
router.route('/:id').get((req,res)=>{
    StoreManager.findById(req.params.id)
        .then(exercise=>res.json(exercise))
        .catch(err=>res.status(400).json('Error: '+err));
});
//Get all storemanager
router.route('/').get((req,res)=>{
    StoreManager.find()
        .then(exercise=>res.json(exercise))
        .catch(err=>res.status(400).json('Error: '+err));
});


//update selected product storemanager

router.route('/update/:id').post((req,res)=>{

    let selected_id=req.params.id;

    let updatedfirstName=req.body.firstName;
    let updatedlastName=req.body.lastName;
    let updatedbirthDay=req.body.birthDay;
    let updatedpassword =req.body.password;
    let updatedemailAddress=req.body.email;
    let updatedaddress=req.body.address;
    let updatedtelephoneNumber=req.body.telephonenumber;
    console.log("recive_data: "+updatedfirstName+updatedlastName+updatedbirthDay+updatedpassword+updatedemailAddress+updatedaddress+updatedtelephoneNumber);
    
    StoreManager.findByIdAndUpdate(
         selected_id,
        { 
            
                "firstName": updatedfirstName,
                "lastName":updatedlastName,
                "emailAddress":updatedemailAddress,
                "birthDay":updatedbirthDay,
                "address":updatedaddress,
                "telephoneNumber":updatedtelephoneNumber
                
        
        },(err,storemanager)=>{
           
            res.send(storemanager);
           
        }
     )


    // const updatedStoreManager=new StoreManager({
    //     firstName,
    //     lastName,
    //     password,
    //     emailAddress,
    //     birthDay,
    //     address,
    //     telephoneNumber
    // });
      
    // StoreManager.findById(req.params.id)
    //             .then(()=>{
    //                 updatedStoreManager.save()
    //                 .then(updatedStoreManager=>res.json('new store manager added'))
    //                 .catch(err=>res.status(400).json('Error in Create new Store manager '+err));
    //             })

        // .then(storemanager=>{
        //     storemanager.firstName=req.body.firstName;
        //     storemanager.lastName=req.body.lastName;
        //     storemanager.birthDay=req.body.birthDay;
        //     storemanager.emailAddress=req.body.email;
        //     storemanager.address=req.body.address;
        //     storemanager.telephoneNumber=req.body.telephonenumber;
        //     storemanager.save()
        //         .then(success=>res.json('storemanager updated'))
        //         .catch(err=>res.status(400).json('Error: '+err));
        // })
        // .catch(err=>res.status(400).json('Error: '+err));

   


});



module.exports = router;