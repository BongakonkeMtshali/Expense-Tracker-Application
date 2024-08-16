const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Connect to MongoDB (Replace with your MongoDB URI)
mongoose.connect('mongodb://localhost/expense_tracker', { useNewUrlParser: true, useUnifiedTopology: true });

// Serve static files
app.use(express.static('public'));

// Define routes
// User routes
app.post('/register', require('./routes/register'));
app.post('/login', require('./routes/login'));
app.post('/logout', require('./routes/logout'));

// Expense routes
app.post('/expenses', require('./routes/expenses/add'));
app.get('/expenses', require('./routes/expenses/get'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Connect to MongoDB (Replace with your MongoDB URI)
mongoose.connect('mongodb://localhost/expense_tracker')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/expenses', require('./routes/expenses'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
