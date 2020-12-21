const connection = require("../../db")

// Adding Category to the database
const addCategory = (req, res) => {
    const { name, img_url } = req.body
    const query = `INSERT INTO category (name,img_url) VALUES (?,?)`;
    const data = [name, img_url];
    connection.query(query, data, (err, result) => {
        if (err) throw err
    });
    res.json("Added category");
}

// Deleting Category from database
const deleteCategory = (req, res) => {
    const { name } = req.body;
    const query = `delete from category where name = ?`;
    const data = [name];
    connection.query(query, data, (err, result) => {
        if (err) throw err
    })
    res.json("Deleted category");
}

// adding product
const addProduct = (req, res) => {
    const { name, price, img_url } = req.body;
    const query = `insert into products (name,price,img_url) values(?,?,?)`
    const data = [name, price, img_url]
    connection.query(query, data, (err, result) => {
        if (err) throw err;
    })
    res.json("Added product")
}

//delete product
const deleteProduct = (req, res) => {
    const { name } = req.body;
    const query = `delete from products where name=?`
    const data = [name]
    connection.query(query, data, (err, result) => {
        if (err) { throw err };
        res.json("Added product");
    })
}

// disable product
const disableProduct = (req, res) => {
    const { name } = req.body;
    const query = `UPDATE products SET available = '0' where name= ?`;
    const data = [name]
    connection.query(query, data, (err, result) => {
        if (err) { throw err };
        res.json("disabled product")
    })
}

//enable product
const enableProduct = (req, res) => {
    const { name } = req.body;
    const query = `UPDATE products SET available = '1' where name= ?`;
    const data = [name]
    connection.query(query, data, (err, result) => {
        if (err) { throw err };
        res.json("enabled product")
    })
}










module.exports = { addCategory, deleteCategory, addProduct, deleteProduct, disableProduct, enableProduct }