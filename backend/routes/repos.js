const express = require('express')
const router = express.Router()
const { getRepo, getRepos, createRepo, updateRepo, deleteRepo } = require('../controllers/repoController')
const protect = require('../middleware/auth')

router.get('/', protect, getRepos)
router.get('/:id', protect, getRepo)
router.post('/', protect, createRepo)
router.put('/:id', protect, updateRepo)
router.delete('/:id', protect, deleteRepo)

module.exports = router