const categoriesRouter = require('express').Router();

const { findAllCategories } = require('../middlewares/categories');
const { sendAllCategories, checkEmptyName } = require('../controllers/categories');
const { createCategory } = require('../middlewares/categories');
const { sendCategoryCreated } = require('../controllers/categories');
const { sendCategoryById } = require('../controllers/categories');
const { updateCategory } = require('../middlewares/categories');
const { sendCategoryUpdated } = require('../controllers/categories');
const { deleteCategory } = require('../middlewares/categories');
const { sendCategoryDeleted } = require('../controllers/categories');
const { checkIsCategoryExists } = require('../middlewares/categories');
const { } = require('../middlewares/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.get("/categories/:id", sendCategoryById);


categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
); 

  categoriesRouter.delete(
    "/categories/:id", 
    deleteCategory, 
    sendCategoryDeleted);

module.exports = categoriesRouter;