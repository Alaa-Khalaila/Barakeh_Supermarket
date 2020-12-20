const connection = require("../../db");
const bcrypt = require("bcrypt");

const login = (req, res) => {
    const { email, password } = req.body;
    const query = `select * from users where email ='${email}'`;
    connection.query(query, async(err, result) => {
        if (err) throw err;
        if (result.length) {
            // comparing the given password and the hashing password.
            pass =await bcrypt.compare(password, result[0].password);
            if (pass) {
                return res.json("Logged in")
            }else{
                return res.json("Email or password is incorrect")
            };
        }else{
            res.json("Email or password is incorrect")
        }
    })
};

module.exports = login