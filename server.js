const app = require('./app');
const mongoose = require('mongoose');
const todoRoutes = require('./router')
const doctorRoutes = require('./routerDoctor')
const appoinmentRoutes = require('./routerAppoinment')

const port = 3001;
const mongoURI = 'mongodb://localhost:27017/appoinmentdb';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


// Routes
app.use('/api', todoRoutes); // Mount the router for '/api/todos' prefix
app.use('/api/doctor', doctorRoutes); // Mount the router for '/api/todos' prefix
app.use('/api/appoinment', appoinmentRoutes); // Mount the router for '/api/todos' prefix

const server = app.listen(port, '127.0.0.1', () => {
    console.log(`Node Server running on port ${port}`);
  });