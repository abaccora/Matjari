const express = require('express');
const router = express.Router();

let sales = [];

// record a sale
router.post('/sales', (req, res) => {
  sales.push({ id: Date.now(), ...req.body });
  res.status(201).json({ message: 'Sale recorded' });
});

// list sales
router.get('/sales', (req, res) => {
  res.json(sales);
});

module.exports = router;
