const express = require('express');
const router =express.Router();
const bodyParser =require('body-parser');
const core = require('cors');
const fs= require('fs');

router.use(bodyParser());
router.use(core());

let Cart = require('../schemas/CartSchema');

//Add new storemanager
router.route('/add').post((req,res)=>{
    console.log(req.body)
    const user_id=req.body.user;
    const products=req.body.products;

    const newCart=new Cart({
        user_id,
        products,
       
           
        });

    Cart.update({user:user_id},newCart,{upsert: true})
        .then(newStoremanager=>res.json('new cart added'))
        .catch(err=>res.status(400).json('Error in Create new cart create '+err));


    // const quntity=req.body.qunitity;
    // const newCart=new Cart({
    //     user,
    //     products,
    //     // quntity
       
    // });

    // newCart.save()
    //     .then(newStoremanager=>res.json('new cart added'))
    //     .catch(err=>res.status(400).json('Error in Create new cart create '+err));


});

//Delete selected product
router.route('/:id').delete((req,res)=>{
    Cart.findByIdAndDelete(req.params.id)
        .then(cart=>res.json('cart delete'))
        .catch(err=>res.status(400).json('Error: '+err));
});

//get selected cart
// router.route('/:id').get((req,res)=>{
//     Cart.findById(req.params.id)
//         .then(cart=>res.json(cart))
//         .catch(err=>res.status(400).json('Error: '+err));
// });

router.route('/:id').get((req,res)=>{
    Cart.find({user:req.params.id})
        .then(cart=>res.json(cart))
        .catch(err=>res.status(400).json('Error: '+err));
});


//Get all cart
router.route('/').get((req,res)=>{
    Cart.find()
        .then(cart=>res.json(cart))
        .catch(err=>res.status(400).json('Error: '+err));
});


//update selected product storemanager

router.route('/update/:id').post((req,res)=>{

    let selected_id=req.params.id;

    let user=req.body.user;
    let products=req.body.products;
    // let qunitity=req.body.qunitity;
    
    
    console.log("recive_data: "+user+products+qunitity);
    
    Cart.findByIdAndUpdate(
         selected_id,
        { 
            
                "user": user,
                "products":products,
                "qunitity":qunitity
                
                
        
        },(err,cart)=>{
           
            res.send(cart);
           
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