const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

router.post('/add', async (req, res) => {
  const { userId, amount, description, date } = req.body;
  try {
    const expense = new Expense({ userId, amount, description, date });
    await expense.save();
    res.send('Expense added successfully');
  } catch (err) {
    res.status(500).send('Error adding expense');
  }
});

router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const expenses = await Expense.find({ userId });
    res.json(expenses);
  } catch (err) {
    res.status(500).send('Error fetching expenses');
  }
});

module.exports = router;
