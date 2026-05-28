const express = require('express')
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController.js')
const protect = require('../middleware/auth')

router.get('/', protect, getUsers)
router.get('/:id', protect, getUser)
router.post('/', protect, createUser)
router.put('/:id', protect, updateUser)
router.delete('/:id', protect, deleteUser)

module.exports = router