const categoriesRouter = require('express').Router();

const findAllCategories = require('../middlewares/categories');
const sendAllCategories = require('../controllers/categories');

categoriesRouter.get('/categories', (req, res) => {
    
})

module.exports = categoriesRouter




