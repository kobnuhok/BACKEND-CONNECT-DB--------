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
const { checkAuth } = require('../middlewares/auth');
const { } = require('../middlewares/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.get("/categories/:id", sendCategoryById);

// routes/categories.js
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);

module.exports = categoriesRouter;