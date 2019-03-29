const db = require('./conn'); 
const Order = require('./coffee-orders')

class User {

    constructor (id, first_name, last_name, email, password) {
        // in python we say self, in js we say this. 
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name; 
        this.email = email;
        this.password = password; 
     }
     static getById(id) {

     }
     static getAll () {

     }
// Retrieve customer orders by ID
     get orders() {

     }
    
}

module.exports = User; 