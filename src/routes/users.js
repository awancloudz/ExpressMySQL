const express = require('express');
const UserController = require('../controller/users.js');

const router = express.Router();

//USERS
//1. Create - Post
router.post('/', UserController.createNewUsers);
//2. Read - Get
router.get('/', UserController.getAllUsers);
//3. Update - Patch
router.patch('/:idUser', UserController.updateUsers);
//4. Delete - Delete
router.delete('/:idUser', UserController.deleteUsers);


module.exports = router;