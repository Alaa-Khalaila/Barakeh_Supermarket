const express = require("express");
const customerRouter = express.Router();
const { addItem, deleteItem, orderRequest, customerOrders, sendMsg, allCat, singleProduct, cart, price } = require("../controller/customer/customer")


customerRouter.post("/additem", addItem)
customerRouter.post("/deleteitem", deleteItem)
customerRouter.post("/orderrequest", orderRequest)
customerRouter.get("/customerorders", customerOrders)
customerRouter.post("/sendmessage", sendMsg)
customerRouter.get("/getcat", allCat)
customerRouter.get("/getcart", cart)
customerRouter.get("/getprice", price)
customerRouter.get(`/product/:id`, singleProduct)



module.exports = customerRouter;