const Product = require("../models/product.model.js");

//get all products view
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ger one product  using id
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//insert products
const createProduct = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update one product using id
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, req.body);
    if (!products) {
      return res.status(404).json({ message: " product not found" });
    }
    const updateProducts = await Product.findById(id);
    res.status(200).json(updateProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete one product using id
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndDelete(id);
    if (!products) {
      res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
