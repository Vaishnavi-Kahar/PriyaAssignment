const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  serialNumber: Number,
  name: String,
  partNumber: String,
  dateReceived: Date,
  dateDispatch: Date,
  balanceItems: Number,
  qrCode: String
});

module.exports = mongoose.model('Item', itemSchema);
