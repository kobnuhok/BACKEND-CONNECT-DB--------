const users = require("../models/user.js");
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Email и пароль обязательны" });
  }

  try {
    const user = await users.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: "Неправильные почта или пароль" });
    }

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      return res.status(401).send({ message: "Неправильные почта или пароль" });
    }

    return res.status(200).send({ _id: user._id, username: user.username, email: user.email });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).send({ message: "Внутренняя ошибка сервера" });
  }
};

module.exports = { login };
