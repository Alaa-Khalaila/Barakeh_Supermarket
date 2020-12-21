const express = require("express");
const adminRouter = express.Router();
const { deleteCategory, addCategory, addProduct, deleteProduct, disableProduct, enableProduct,
    disableUser, enableUser, ordersList, updateStatus } = require("../controller/admin/admin")

adminRouter.post("/addCategory", addCategory);
adminRouter.delete("/deleteCategory", deleteCategory);
adminRouter.post("/addproduct", addProduct);
adminRouter.delete("/deleteproduct", deleteProduct);
adminRouter.put("/disableproduct", disableProduct);
adminRouter.put("/enableproduct", enableProduct);
adminRouter.put("/disableuser", disableUser);
adminRouter.put("/enableuser", enableUser);
adminRouter.get("/orderslist", ordersList);
adminRouter.put("/updatestatus", updateStatus);



module.exports = adminRouter;
