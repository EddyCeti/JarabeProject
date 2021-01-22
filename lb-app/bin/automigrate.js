'use strict'
const app  = require('../server/server');
const ds = app.dataSources.mysqlDs;

ds.automigrate(['StockMovements'],(err) => {
    if(err){
        throw err;
    }
    console.log('models created!');
    ds.disconnect();
})