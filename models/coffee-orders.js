const db = require('./conn');
const User = require('./users')


// Class constructor for each individuak order;
class Order {
    constructor (id, order, size, user_id ) {

        this.id = id;
        this.order = order;
        this.size = size; 
        this.UserId= user_id;
    }
    // Get orders by ID
    static getById(id) {

    }
    //  Get all orders 
    static getAll() {

    }


}

module.exports = Order; 