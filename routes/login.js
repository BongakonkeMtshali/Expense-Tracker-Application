const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Invalid credentials');
    }
    req.session.userId = user._id;
    res.status(200).send('Logged in');
  } catch (error) {
    res.status(500).send('Error logging in');
  }
});

module.exports = router;
