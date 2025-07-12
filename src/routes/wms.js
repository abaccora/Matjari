const express = require('express');
const router = express.Router();

// sample in-memory store
let warehouses = [];
let inventory = [];

// get list of warehouses
router.get('/warehouses', (req, res) => {
  res.json(warehouses);
});

// add warehouse
router.post('/warehouses', (req, res) => {
  warehouses.push({ id: Date.now(), ...req.body });
  res.status(201).json({ message: 'Warehouse added' });
});

// stock transfer
router.post('/transfer', (req, res) => {
  // TODO: implement real transfer logic
  res.json({ message: 'Stock transfer recorded', data: req.body });
});

module.exports = router;
