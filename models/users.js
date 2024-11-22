const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  username: String,
  password: String,
  email: { type: String, unique: true },
  token: String,
});

const User = mongoose.model('users', userSchema);

module.exports = User;
