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
//-- Find all customers that live in London, Madrid, or Brazil
router.get('/findCustomers', async(req,res,next) =>{
    try{
        const data = await Budget.findCustomers();
        console.log(data);
        next(data)
    }catch(e){
        console.log(e);
    }
})
//-- Add a customer record
router.post('/addCustomer',async(req,res,next)=>{
    try{
        const data = await Budget.insertCustomer();
        console.log(data);
        next(data);
    }
    catch(e){
        console.log(e)
    }
})


module.exports = router;