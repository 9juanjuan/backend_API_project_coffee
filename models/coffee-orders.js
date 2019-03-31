const db = require('./conn');
const User = require('./users')


// Class constructor for each individuak order;
class Order {
    constructor (id, order_name, size, user_id ) {

        this.id = id;
        this.order = order_name;
        this.size = size; 
        this.UserId= user_id;
    }
    // Get orders by ID
    static getById(id) {
       return db.one(` select * from orders where user_id = ${id} `)
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
        .catch(() => {
            return null; // signal an invalid value 
        })
    }
    //  Returns array with all orders 
    static getAll() {
        return db.any( `select * from orders `)
            .then((OrdersArray) => {
                return OrdersArray.map((ordersData)=> {
                    const newOrders = new Order(
                        ordersData.id,
                        ordersData.order_name,
                        ordersData.size,
                        ordersData.user_id
                    )
                    console.log(newOrders)
                    return newOrders
                })
              
            })
    }

    // getById(1);

}
Order.getById(1);
// console.log(Order.getAll())
module.exports = Order; 