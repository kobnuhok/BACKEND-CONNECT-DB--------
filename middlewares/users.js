const users = require('../models/user');
const bcrypt = require('bcrypt');

const hashPassword = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send(JSON.stringify({ message: "Ошибка хеширования пароля" }));
  }
};

const findAllUsers = async (req, res, next) => {
  try {
    req.usersArray = await users.find({});
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send(JSON.stringify({ message: "Ошибка поиска пользователей" }));
  }
};

const createUser = async (req, res, next) => {
  try {
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
  }
};

const findUserById = async (req, res, next) => {
  try {
    req.user = await users.findById(req.params.id);
    if (!req.user) {
      return res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
    }
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка поиска пользователя" }));
  }
};

const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!req.user) {
      return res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
    }
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка обновления пользователя" }));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    if (!req.user) {
      return res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
    }
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка удаления пользователя" }));
  }
};

const checkEmptyNameAndEmailAndPassword = (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Заполните все поля" }));
  } else {
    next();
  }
};

const checkEmptyNameAndEmail = (req, res, next) => {
  if (!req.body.name || !req.body.email) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Не указано имя или email" }));
  } else {
    next();
  }
};

const checkIsUserExists = async (req, res, next) => {
  try {
    const usersArray = await users.find({});
    const isInArray = usersArray.find((user) => req.body.name === user.name || req.body.email === user.email);
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Пользователь с такими данными уже существует" }));
    } else {
      next();
    }
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send(JSON.stringify({ message: "Ошибка проверки пользователя" }));
  }
};

const filterPassword = (req, res, next) => {
  const filterUser = (user) => {
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  };
  if (req.user) {
    req.user = filterUser(req.user);
  }
  if (req.usersArray) {
    req.usersArray = req.usersArray.map((user) => filterUser(user));
  }
  next();
};

module.exports = {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  filterPassword,
  hashPassword
};
