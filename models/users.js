const db = require('./conn'); 
const Order = require('./coffee-orders')
const bcrypt = require('bcryptjs')

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
        return db.one( `select * from users where id = ${id}`)
            .then((userData) => {
                const newUser = new User(
                    userData.id,
                    userData.first_name,
                    userData.last_name,
                    userData.email,
                    userData.password
                )
                console.log(newUser)
                return newUser;
            })
            .catch(() => {
                console.log('ruh roh')
                return null; // signal an invalid value 
        })
     }

     setPassword(newPassword) {
        const salt = bcrypt.genSaltSync(10); 
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash; 
    }
    checkPassword(aPassword) {
        return bcrypt.compareSync(aPassword, this.password);
    }

     static getAll () {

     }
// Retrieve customer orders by ID
      orders() {
         return db.any (` select * from orders where user_id = ${this.id}`)
            .then((ordersArray) => {
                 return ordersArray.map((orderData) => {
                    const cust_orders = new Order(
                        orderData.id,
                        orderData.order_name,
                        orderData.size,
                        orderData.user_id
                    )
                    console.log(cust_orders)
                    return cust_orders
                })
            })
            .catch(() =>{
                console.log('uh oh')
                return null
        })
           

     }
    
}
// User.getById(1); 
// Able to retrieve orders placed by specific customer

async function passwordEncryption(id, password, passCheck) {
    const user1 = await User.getById(id);
    user1.setPassword(password); 
    console.log(user1.checkPassword(passCheck))
}
async function customer_orders(id) {
    const user1 = await User.getById(id);
    const user1Order = await user1.orders();
    // console.log(user1Order) 
    return user1Order
}
// customer_orders(7);

//Password check should return true
// passwordEncryption(1, 'baconfries', 'baconfries')


/// Password check should fail / return false 
// passwordEncryption(1, 'baconfries', 'chickenfries')

module.exports = User; 