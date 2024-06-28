const mongoose = require('mongoose');

const appoinmentSchema = new mongoose.Schema({
    id: Number,
    patientName: String,
    doctorName: String,
    date: Date,
  });
  
  module.exports = mongoose.model('appoinment', appoinmentSchema );
  