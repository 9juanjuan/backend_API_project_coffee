// require pg-promise', then call it immediately, which gives 
// us a configured database connector

const pgp = require('pg-promise')();
const options = {
    host: 'localhost',
    database: 'restaurant-favorite'
   };

// make a connection to the database specified by the options object 
const db = pgp(options) 
module.exports = db;

