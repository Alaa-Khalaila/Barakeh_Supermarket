const db = require("../../db");


const register = (req, res) => {

    const { user_name, password, phone, email } = req.body;
    const role_id = 0;

    // Cheacking if there is no email or user name in the database.
    const query = `select * from users where email = ${email} or user_name =${user_name} `;
    db.query(query, (err, result) => {
        if (err) throw err;
        if (result.length) {
            if (email = result[0].email) {
                return res.json("Email is already used.")
            } else {
                return res.json("User name is already used.")
            }
        }
    });
}

module.exports = register