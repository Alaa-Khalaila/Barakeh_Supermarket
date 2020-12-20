const express = require("express");
const adminRouter = express.Router();
const addCategory = require("../controller/admin/addCategory");

adminRouter.post("/addCategory", addCategory);

module.exports = adminRouter;
