const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, "Min product length 5 is requires"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Min product prize is 0"],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, "Min description length is 10"],
    maxlength: [100, "Dont give above 100 description"],
  },
  author: {
    type: String,
    required: true,
    maxlength: [50, "Max 50 letters for Author"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
