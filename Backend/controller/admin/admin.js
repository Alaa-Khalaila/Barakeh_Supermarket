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
    const available = 1
    const query = `insert into product (name,price,img_url,available) values(?,?,?,?)`
    const data = [name, price, img_url, available]
    connection.query(query, data, (err, result) => {
        if (err) throw err;
    })
    res.json("Added product")
}
module.exports = { addCategory, deleteCategory, addProduct }