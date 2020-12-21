const connection = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { email, password } = req.body;
    const query = `select * from users where email ='${email}'`;
    connection.query(query, async (err, result) => {
        if (err) throw err;
        if (result.length) {
            // comparing the given password and the hashing password.
            pass = await bcrypt.compare(password, result[0].password);
            if (pass) {
                const payload = {
                    user_id: result[0].user_id,
                    user_name: result[0].user_name,
                    phone: result[0].phone,
                    password: result[0].password,
                    email: result[0].email,
                    is_disable: result[0].is_disable,
                    role_id: result[0].role_id
                };
                token = jwt.sign(payload, process.env.SECRET);
                res.header('x-auth', token).json(token)
            } else {
                return res.json("Email or password is incorrect")
            };
        } else {
            res.json("Email or password is incorrect")
        }
    })
};

module.exports = login