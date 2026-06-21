const express = require('express')
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser, getUserStats, addUserStats, getUserAnalytics } = require('../controllers/userController.js')
const protect = require('../middleware/auth')

router.get('/', protect, getUsers)
router.get('/:id', protect, getUser)
router.get('/:id/stats', protect, getUserStats)
router.get('/:userId/analytics', protect, getUserAnalytics)
router.post('/:id/stats', protect, addUserStats)
router.post('/', protect, createUser)
router.put('/:id', protect, updateUser)
router.delete('/:id', protect, deleteUser)

module.exports = router