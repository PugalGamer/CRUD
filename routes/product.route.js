const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//get products
router.get("/", getProducts);
//get one product
router.get("/:id", getProduct);
//insert product
router.post("/", createProduct);
//update product
router.put("/:id", updateProduct);
//delete product
router.delete("/:id", deleteProduct);

module.exports = router;
