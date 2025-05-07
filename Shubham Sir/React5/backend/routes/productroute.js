const express = require("express");
const { createProduct, getallProduct, updateProduct, deleteProduct, getproductByCategory } = require("../controller/product.controller");
const {isAdmin , isLoggedIn} = require("../middleware");
const router = express.Router();


router.post("/create" ,isLoggedIn, isAdmin,createProduct)
router.get("/", getallProduct)
router.put("/update/:id" ,isLoggedIn, isAdmin, updateProduct)
router.delete("/delete/:id" ,isLoggedIn, isAdmin, deleteProduct)
router.get("/category/:id",getproductByCategory)
module.exports = router;