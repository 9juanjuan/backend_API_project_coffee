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
       return db.one(` select * from orders where id = ${id} `)
        .then ((orderData) => {
            const newOrder = new Order(
                orderData.id,
                orderData.order_name,
                orderData.size, 
                orderData.user_id
                )
            console.log(newOrder);
            return newOrder;
        })
    }
    //  Get all orders 
    static getAll() {

    }

    // getById(1);

}
Order.getById(1);
module.exports = Order; 