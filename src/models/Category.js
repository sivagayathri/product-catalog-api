const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
});

module.exports = mongoose.model("Categories", categorySchema);
