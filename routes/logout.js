const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  req.session.destroy();
  res.status(200).send('Logged out');
});

module.exports = router;
