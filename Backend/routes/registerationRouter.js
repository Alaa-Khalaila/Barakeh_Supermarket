const express = require('express');
const login = require('../controller/signup/login');
const registerationRouter = express.Router();
const register = require("../controller/signup/register")

registerationRouter.post("/signup",register);
registerationRouter.post("/login",login)

module.exports = registerationRouter;