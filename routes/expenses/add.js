const express = require('express');
const router = express.Router();
const Expense = require('../../models/Expense');

router.post('/', async (req, res) => {
  const { date, amount, category } = req.body;
  try {
    if (!req.session.userId) {
      return res.status(401).send('Unauthorized');
    }
    const expense = new Expense({
      userId: req.session.userId,
      date,
      amount,
      category
    });
    await expense.save();
    res.status(201).send('Expense added');
  } catch (error) {
    res.status(400).send('Error adding expense');
  }
});

module.exports = router;
