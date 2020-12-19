const express = require('express');
const registerationRouter = express.Router();
const register = require("../controller/signup/register")

registerationRouter.post("/signup",register);

module.exports = registerationRouter;