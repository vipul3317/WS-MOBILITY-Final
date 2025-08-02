const mongoose = require('mongoose');
const ContractFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  //date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('contract-form', ContractFormSchema);
