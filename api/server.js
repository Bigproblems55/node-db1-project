const express = require("express");

// const db = require("../data/dbConfig.js");
const BudgetRouter = require('./budget/budget-router.js');

const server = express();

server.use(express.json());
server.use("/api/budget",BudgetRouter);
server.get('/',(req,res)=>{
    res.status(200).json({
        api:'up',
        environment:process.env.NODE_ENV
    })
})


module.exports = server;
