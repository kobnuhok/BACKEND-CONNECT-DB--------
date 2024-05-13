const categories = require('../models/category');

const findCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({});
    next();
}

module.exports = findCategories








