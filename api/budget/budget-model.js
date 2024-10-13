const db = require('../../data/dbConfig')

function getCustomers(){

    return db()
        .from('Customer')
        .select('Id', 'ContactName', 'Address', 'City', 'PostalCode', 'Country')
        .where('PostalCode','1010')
    }

function getSupplierPhone(){
    return db()
    .from('Supplier')
    .select('*')
    .where('Id',11)
}

function firstTenOrders(){
    return db()
    .from('Order')
    .orderBy('OrderDate','ASC')
    .limit(10)
}

function findCustomers(){
    return db()
    .select('*')
    .from('Customer')
    .where('Country','Brazil')
    .orWhere('Country','London')
    // .andWhere('Country','Madrid')
}
function insertCustomer(){
    return db()
    .from('Customer')
    .insert([{CustomerName:'USA is Trash',ContactName:'More Dead Pigs', 
        Address:'3833 Underwhere Rd', City:'City of false Hope', 
        PostalCode:'2442', Country:'Country of Stolen Land'}])
}
module.exports = {
    getCustomers,
    getSupplierPhone,
    firstTenOrders,
    findCustomers,
    insertCustomer
}