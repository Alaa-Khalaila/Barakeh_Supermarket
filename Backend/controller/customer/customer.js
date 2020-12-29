const connection = require('../../db')

//add item
const addItem = (req, res) => {
    const { product_id,price } = req.body;
    //make this depend on jwt user id
    const query = `insert into order_products (product_id,order_id,price) values(?,?,?)`
    const data = [product_id, 1,price];
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

// Categories list
const allCat = (req, res) => {
    const query = `select * from category`
    connection.query(query, (err, result) => {
        if (err) { throw err };
        res.json(result)
    })
}

// single category list items
const singleProduct = (req, res) => {
    const query = `select * from products where category_id=?`
    const data = [req.params.id]
    connection.query(query, data, (err, result) => {
        if (err) { throw err };
        res.json(result)
    })
}

const cart = (req, res) => {
    const query = `SELECT order_products.order_id,order_products.product_id,order_products.price,users.user_id,products.name
    FROM order_products
    INNER JOIN users ON order_products.order_id=users.user_id
    INNER JOIN products ON products.product_id=order_products.product_id`
    connection.query(query, (err, result) => {
        if (err) { throw err };
        res.json(result)
    })
}
module.exports = { addItem, deleteItem, orderRequest, customerOrders, sendMsg, allCat, singleProduct,cart }

