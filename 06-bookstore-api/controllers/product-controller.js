const Product = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const getAllProducts = await Product.find({});

    if (!getAllProducts) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }
    res.status(200).json({
      success: true,
      data: getAllProducts,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getSingleProducts = async (req, res) => {
  try {
    const prodId = req.params.id;
    const getAProduct = await Product.findById(prodId);

    if (!getAProduct) {
      return res.status(404).json({
        success: false,
        message: "Give a proper ID",
      });
    }
    res.status(200).json({
      success: true,
      data: getAProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const addProducts = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await Product.create(productData);

    if (!newProduct) {
      return res.status(404).json({
        success: false,
        message: "Check you req.body",
      });
    }
    res.status(200).json({
      success: true,
      data: newProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const updateProducts = async (req, res) => {
  try {
    const prodId = req.params.id;
    const updatedData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      prodId,
      updatedData,
      { new: true },
    );
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Give a proper ID",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const prodId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(prodId);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Give a proper ID",
      });
    }
    res.status(200).json({
      success: true,
      data: deletedProduct,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getProducts,
  getSingleProducts,
  addProducts,
  updateProducts,
  deleteProducts,
};
