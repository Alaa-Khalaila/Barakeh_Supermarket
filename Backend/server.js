const express = require('express');
require('dotenv').config()
const db = require("./db");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server working')
})