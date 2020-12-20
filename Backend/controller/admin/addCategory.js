const connection = require("../../db")

const addCategory = (req, res) => {
    const { name, img_url } = req.body
    const query = `INSERT INTO category (name,img_url) VALUES (?,?)`;
    const data = [name,img_url];
    connection.query(query, data, (err, result) => {
        if (err) throw err
    });
    res.json("Added category");
}

module.exports = addCategory;