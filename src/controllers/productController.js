const Product = require("../models/Product");
const Categories = require("../models/Category");

const getAllProducts = async (req, res, next) => {
    try {
    const products = await Product.find();
    const categories = await Categories.find();


    if (!products.length) {
      const err = new Error("No products found");
      err.statusCode = 404;
      return next(err);
    }

    const categoryMap = {};
    categories.forEach((cat) => {
      categoryMap[cat.id] = cat.title;
    });

    const formatted = products.map((p) => ({
      image: p.image,
      title: p.title,
      price: p.price,
      discountedPrice: p.discountedPrice,
      catId: p.catId,
      category: categoryMap[p.catId] || "Unknown",
    }));

    res.json({ items: formatted });
  } catch (error) {
    next(error); 
  }
};


module.exports = { getAllProducts };
