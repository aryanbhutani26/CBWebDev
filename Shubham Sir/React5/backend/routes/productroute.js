const express = require("express");
const { createProduct, getallProduct, updateProduct, deleteProduct, getproductByCategory } = require("../controller/product.controller");
const {isAdmin} = require("../middleware");
const router = express.Router();


router.post("/create", isAdmin,createProduct)
router.get("/", getallProduct)
router.put("/update/:id", isAdmin, updateProduct)
router.delete("/delete/:id", isAdmin, deleteProduct)
router.get("/category/:id",getproductByCategory)
module.exports = router;