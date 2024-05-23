
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
});

userSchema.statics.findUserByCredentials = function(email, password) {
  // Попытаемся найти пользователя по почте
  return this.findOne({ email }) // this — это модель users
    .then(user => {
      if (!user) {
        return Promise.reject(new Error("Неправильные почта или пароль"));
      }
      
      return bcrypt.compare(password, user.password)
        .then(matched => {
          if (!matched) {
            return Promise.reject(new Error("Неправильные почта или пароль"));
          }
          return user; 
      });
  });
};

module.exports = mongoose.model("user", userSchema);
