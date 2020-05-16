const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');

router.use(bodyParser());
router.use(core());

let Order = require('../schemas/OrderSchema');

//Add new storemanager
router.route('/add').post((req,res)=>{
    const totalAmaount=req.body.totalAmaount;
    const user_id=req.body.user_id;
    const products=req.body.products;
    const numberOfItem =req.body.numberOfItem;
    
    const newOrder=new Order({
        totalAmaount,
        user_id,
        products,
        numberOfItem
    });

    newOrder.save()
        .then(newOrder=>{res.json(newOrder)})
        .catch(err=>res.status(400).json('Error in Create new Store manager '+err));


});

//Delete selected order
router.route('/:id').delete((req,res)=>{
    Order.findByIdAndDelete(req.params.id)
        .then(storemanager=>res.json('order delete'))
        .catch(err=>res.status(400).json('Error: '+err));
});

//get selected order
router.route('/:id').get((req,res)=>{
    Order.findById(req.params.id)
        .then(exercise=>res.json(exercise))
        .catch(err=>res.status(400).json('Error: '+err));
});
//Get all storemanager
router.route('/').get((req,res)=>{
    Order.find()
        .then(order=>res.json(order))
        .catch(err=>res.status(400).json('Error: '+err));
});


//update selected product storemanager

// router.route('/update/:id').post((req,res)=>{

//     let selected_id=req.params.id;

//     let updatedfirstName=req.body.firstName;
//     let updatedlastName=req.body.lastName;
//     let updatedbirthDay=req.body.birthDay;
//     let updatedpassword =req.body.password;
    
//     console.log("recive_data: "+updatedfirstName+updatedlastName+updatedbirthDay+updatedpassword+updatedemailAddress+updatedaddress+updatedtelephoneNumber);
    
//     StoreManager.findByIdAndUpdate(
//          selected_id,
//         { 
            
//                 "firstName": updatedfirstName,
//                 "lastName":updatedlastName,
//                 "emailAddress":updatedemailAddress,
//                 "birthDay":updatedbirthDay,
//                 "address":updatedaddress,
//                 "telephoneNumber":updatedtelephoneNumber
                
        
//         },(err,storemanager)=>{
           
//             res.send(storemanager);
           
//         }
//      )


//     // const updatedStoreManager=new StoreManager({
//     //     firstName,
//     //     lastName,
//     //     password,
//     //     emailAddress,
//     //     birthDay,
//     //     address,
//     //     telephoneNumber
//     // });
      
//     // StoreManager.findById(req.params.id)
//     //             .then(()=>{
//     //                 updatedStoreManager.save()
//     //                 .then(updatedStoreManager=>res.json('new store manager added'))
//     //                 .catch(err=>res.status(400).json('Error in Create new Store manager '+err));
//     //             })

//         // .then(storemanager=>{
//         //     storemanager.firstName=req.body.firstName;
//         //     storemanager.lastName=req.body.lastName;
//         //     storemanager.birthDay=req.body.birthDay;
//         //     storemanager.emailAddress=req.body.email;
//         //     storemanager.address=req.body.address;
//         //     storemanager.telephoneNumber=req.body.telephonenumber;
//         //     storemanager.save()
//         //         .then(success=>res.json('storemanager updated'))
//         //         .catch(err=>res.status(400).json('Error: '+err));
//         // })
//         // .catch(err=>res.status(400).json('Error: '+err));

   


// });



module.exports = router;