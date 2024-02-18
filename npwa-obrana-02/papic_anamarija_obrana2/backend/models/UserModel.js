const mongoose = require('mongoose');

const UserModelSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
}, { timestamps: true });

const UserModel = mongoose.model('User', UserModelSchema);

module.exports = UserModel;
