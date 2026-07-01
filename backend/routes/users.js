const express = require('express')
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser, getUserStats, addUserStats, getUserAnalytics, getGoals, getGoal, createGoal, updateGoalStreakStatus } = require('../controllers/userController.js')
const protect = require('../middleware/auth')

router.get('/', protect, getUsers)
router.get('/:id', protect, getUser)
router.get('/:id/stats', protect, getUserStats)
router.get('/:userId/goals', protect, getGoals)
router.get('/:userId/analytics', protect, getUserAnalytics)
router.post('/:id/stats', protect, addUserStats)
router.post('/:userId/goals', protect, createGoal)
router.post('/', protect, createUser)
router.put('/:id', protect, updateUser)
router.put('/:goalId/streak', protect, updateGoalStreakStatus)
router.delete('/:id', protect, deleteUser)

module.exports = router