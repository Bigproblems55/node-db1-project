const db = require('../../data/dbConfig')

function getCustomers(){

    return db()
        .from('customer')
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
module.exports = {
    getCustomers,
    getSupplierPhone,
    firstTenOrders
}