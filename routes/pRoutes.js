
const express = require('express');
const router = express.Router();
const pf = require('../models/projects');

router.get('/movies', async (req, res) => {
  console.log("hii")
  try {
    const pro = await pf.find();
    res.json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/movie/:id', async (req, res) => {
  try {
    const pro = await pf.findById(req.params.id);
    res.json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
