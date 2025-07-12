const express = require('express');
const router = express.Router();

let journal = [];

router.post('/entries', (req, res) => {
  journal.push({ id: Date.now(), ...req.body });
  res.status(201).json({ message: 'Entry added' });
});

router.get('/entries', (req, res) => {
  res.json(journal);
});

module.exports = router;
