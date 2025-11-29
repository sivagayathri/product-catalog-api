const Categories = require("../models/Category");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Categories.find();

    res.status(200).json({
      categories,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllCategories };
