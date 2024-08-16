const express = require('express');
const router = express.Router();
const Expense = require('../../models/Expense');

router.get('/', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).send('Unauthorized');
    }
    const expenses = await Expense.find({ userId: req.session.userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).send('Error retrieving expenses');
  }
});

module.exports = router;
