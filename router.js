const express = require('express');
const router = express.Router();
const appoinment = require('./model');


// Create
router.post('/create', async (req, res) => {
  const newTodo = new appoinment(req.body);
  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
    console.log(req.body);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read All
router.get('/getall', async (req, res) => {
  try {
    const todos = await appoinment.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read One
router.get('/get', async (req, res) => {
  const { id } = req.body;
  try {
    const todo = await appoinment.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put('/update', async (req, res) => {
  const { id,name,city,age } = req.body;
  try {
    const result = await appoinment.updateOne({ id: id }, {$set:{name:name, city:city, age:age}});
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
    const deletedTodo = await appoinment.deleteOne({id:id});
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(deletedTodo );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
