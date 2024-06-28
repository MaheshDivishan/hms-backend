const express = require('express');
const router = express.Router();
const appoinment = require('./modelAppoinment');


// Create
router.post('/create', async (req, res) => {
  const newDoctor= new appoinment(req.body);
  try {
    const savedDoctor = await newDoctor.save();
    res.json(savedDoctor);
    console.log(req.body);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read All
router.get('/getall', async (req, res) => {
  try {
    const doctors = await appoinment.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read One
router.get('/get', async (req, res) => {
  const { id } = req.body;
  try {
    const doctorOne= await appoinment.findById(id);
    if (!doctorOne) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(doctoOner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put('/update', async (req, res) => {
  const { id,patientName,doctorName,date } = req.body;
  try {
    const result = await appoinment.updateOne({ id: id }, {$set:{patientName:patientName, doctorName:doctorName, date:date}});
    if (!result ) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const deletedDoctor = await appoinment.deleteOne({id:id});
    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(deletedDoctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
