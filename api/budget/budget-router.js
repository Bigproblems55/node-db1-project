const express = require('express');
const Budget = require('./budget-model')
const router = express.Router();


//-- Find all customers with postal code 1010
router.get('/customer',async(req,res,next)=>{
    try{
        const data = await Budget.getCustomers();
        console.log(data);
        next(data);
    }catch(e){
        console.log(e);
    }
})

// -- Find the phone number for the supplier with the id 11
router.get('/supplier-phone', async(req,res,next) =>{
    try{
        const data = await Budget.getSupplierPhone();
        console.log(data);
        next(data)
    }catch(e){
        console.log(e);
    }
})

// -- List first 10 orders placed, sorted descending by the order date
router.get('/orders', async(req,res,next)=>{
    try{
        const data = await Budget.firstTenOrders();
        console.log(data);
        next(data)
    }catch(e){
        console.log(e);
    }
})

module.exports = router;