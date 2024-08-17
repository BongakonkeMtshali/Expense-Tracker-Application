const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

router.post('/add', async (req, res) => {
  const { name } = req.body;
  try {
    const category = new Category({ name });
    await category.save();
    res.send('Category added successfully');
  } catch (err) {
    res.status(500).send('Error adding category');
  }
});

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).send('Error fetching categories');
  }
});

module.exports = router;
