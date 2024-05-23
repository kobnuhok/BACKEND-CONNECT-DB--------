const express = require('express');
const pagesRouter = express.Router();
const { sendIndex } = require('../controllers/auth');

pagesRouter.get('/', sendIndex);

module.exports = pagesRouter;










