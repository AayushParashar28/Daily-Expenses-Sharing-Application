const express = require('express');
const bodyParser = require('body-parser');
const csv = require('csv-express');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/route/userRoutes');
const expenseRoutes = require('./src/route/expenseRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});