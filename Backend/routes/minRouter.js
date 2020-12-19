const mainRouter = require("express").Router();

const adminRouter = require("./adminRouter");
const customerRouter = require("./customerRouter");
const registerationRouter = require("./registerationRouter");

//mainRouter.use("/admin", adminRouter);
//mainRouter.use("/customer", customerRouter);
mainRouter.use("/account", registerationRouter);

module.exports = mainRouter