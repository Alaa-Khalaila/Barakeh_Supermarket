const connection = require('../../db')

//add item
const addItem = (req, res) => {
    const { quantity, product_id, order_id, each_price } = req.body;
    //make this depend on jwt user id
    const query = `insert into order_products (quantity, product_id, order_id,each_price) values(?,?,?,?)`
    const data = [quantity, product_id, order_id, each_price];
    connection.query(query, data, (err, result) => {
        if (err) throw err;
        res.json("added item")
    })
}

//delete item
const deleteItem = (req, res) => {
    const { product_id, order_id } = req.body;
    //make this depend on jwt user id
    const query = `delete from order_products where product_id = ${product_id} AND order_id = ${order_id}`
    connection.query(query, (err, result) => {
        if (err) throw err;
        res.json("deleted item")
    })
}

//send the order request
const orderRequest = (req, res) => {
    const { user_id, price, comment } = req.body;
    let dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const created_at = year + "/" + month + "/" + day;

    const query = `insert into orders (user_id,price,comment,created_at) values(?,?,?,?)`
    const data = [user_id, price, comment, created_at];
    connection.query(query, data, (err, result) => {
        if (err) { throw err };
        res.json("order sent")
    })
}

//watch the orders list
const customerOrders = (req, res) => {
    const query = `SELECT  orders.created_at,orders.comment,orders.price,orders.status
        FROM orders
        INNER JOIN users
        ON orders.user_id=users.user_id`
    connection.query(query, (err, result) => {
        if (err) { throw err }
        res.json(result)
    })
}

// Send message
const sendMsg = (req, res) => {
    const { name, phone, message } = req.body;
    //make this depend on jwt user id
    const query = `insert into messages (name, phone,message) values(?,?,?)`
    const data = [name, phone, message];
    connection.query(query, data, (err, result) => {
        if (err) throw err;
        res.json("sent message")
    })
}

module.exports = { addItem, deleteItem, orderRequest, customerOrders, sendMsg }

