var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);

module.exports = router;