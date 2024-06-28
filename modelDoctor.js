const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    id: Number,
    name: String,
    speciality: String,
  });
  
  module.exports = mongoose.model('doctor', doctorSchema );
  