const express = require('express');
require('dotenv').config()
const db = require("./db");
const mainRouter = require("./routes/minRouter")
const registerationRouter = require("./routes/registerationRouter")

const app = express();
app.use(express.json());
app.use(mainRouter);
app.use(registerationRouter)


const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log('Server working')
})