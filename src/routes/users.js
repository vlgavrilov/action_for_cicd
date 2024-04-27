const express = require('express');
const router = express.Router();
const {
  userController,
} = require('../controllers/users');

router.get('/emoji', userController.getUserEmojis);
module.exports = router;
