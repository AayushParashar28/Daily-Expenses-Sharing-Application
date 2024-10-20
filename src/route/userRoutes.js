const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

router.post('/', userController.createUser );
router.get('/:id', userController.getUserById);

module.exports = router;