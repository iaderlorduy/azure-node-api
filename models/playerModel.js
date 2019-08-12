const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerModel = new Schema({
  name: { type: String },
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Player', playerModel);
