const mongoose = require('mongoose');

const patientsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    city: String,
    age: Number,
      
  });
  
  module.exports = mongoose.model('patients', patientsSchema );
  