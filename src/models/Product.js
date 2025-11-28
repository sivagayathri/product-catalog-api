const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  catId: { type: String, required: true },
  price: { type: String, required: true },
  discountedPrice: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
