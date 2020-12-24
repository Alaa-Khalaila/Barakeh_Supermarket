const express = require("express");
const customerRouter = express.Router();
const { addItem, deleteItem, orderRequest, customerOrders, sendMsg, allCat } = require("../controller/customer/customer")


customerRouter.post("/additem", addItem)
customerRouter.post("/deleteitem", deleteItem)
customerRouter.post("/orderrequest", orderRequest)
customerRouter.get("/customerorders", customerOrders)
customerRouter.post("/sendmessage", sendMsg)
customerRouter.get("/getcat", allCat)



module.exports = customerRouter;