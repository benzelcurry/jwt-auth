const express = require('express');
const router = express.Router();

// GET users listing
router.get('/', function(req, res, next) {
  res.send('Response with a resource');
});

// GET user profile
router.get('/profile', function (req, res, next) {
  res.send(req.user);
});

module.exports = router;