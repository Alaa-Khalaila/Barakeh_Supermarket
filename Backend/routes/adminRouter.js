const express = require("express");
const adminRouter = express.Router();
const {deleteCategory,addCategory, addProduct} = require("../controller/admin/admin")

adminRouter.post("/addCategory", addCategory);
adminRouter.delete("/deleteCategory",deleteCategory);
adminRouter.post("/addproduct",addProduct);

module.exports = adminRouter;
