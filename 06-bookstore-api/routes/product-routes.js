const express = require("express");
const route = express.Router();

const {
  getProducts,
  getSingleProducts,
  addProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/product-controller");

route.get("/get", getProducts);
route.get("/get/:id", getSingleProducts);
route.post("/add", addProducts);
route.put("/update/:id", updateProducts);
route.delete("/delete/:id", deleteProducts);

module.exports = route;
