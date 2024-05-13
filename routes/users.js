const usersRouter = require('express').Router();

const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');

usersRouter.get('/users', (req, res) => {
    
})

module.exports = usersRouter


