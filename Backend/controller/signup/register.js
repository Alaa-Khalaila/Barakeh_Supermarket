const connection = require("../../db");
const bcrypt = require("bcrypt");


const register = (req, res) => {

    const { user_name, password, phone, email } = req.body;
    const role_id = 0;
    var dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const created_at = year + "/" + month + "/" + day;
    const is_disabled = 0

    // Cheacking if there is no email or user name in the database.
    let query = `SELECT * from users WHERE email = '${email}' OR user_name ='${user_name}' `;
    connection.query(query, (err, result) => {
        if (err) throw err;
        if (result.length) {
            if (email === result[0].email) {
                return res.json("Email is already used.")

            } else {
                return res.json("User name is already used.")
            };
        };
        //Hashing the password.
        const hashPassword = bcrypt.hashSync(password, Number(process.env.SALT), (err, result) => {
            if (err) throw err
        });

        // Adding new user to database.
        query = `insert INTO users (email,phone,password,user_name,role_id,created_at,is_disabled) VALUES('${email}','${phone}','${hashPassword}','${user_name}','${role_id}','${created_at}','${is_disabled}')`
        connection.query(query, (err, result) => {
            if (err) throw err
        })
        return res.json("Added user")
    });

}
module.exports = register