const express = require("express");
const adminRouter = express.Router();
const { deleteCategory, addCategory, addProduct, deleteProduct, disableProduct, enableProduct, disableUser, enableUser } = require("../controller/admin/admin")

adminRouter.post("/addCategory", addCategory);
adminRouter.delete("/deleteCategory", deleteCategory);
adminRouter.post("/addproduct", addProduct);
adminRouter.delete("/deleteproduct", deleteProduct);
adminRouter.put("/disableproduct", disableProduct);
adminRouter.put("/enableproduct", enableProduct);
adminRouter.put("/disableuser", disableUser);
adminRouter.put("/enableuser", enableUser);



module.exports = adminRouter;
