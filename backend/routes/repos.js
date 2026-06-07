const express = require('express')
const router = express.Router()
const { getRepo, getRepos, createRepo, updateRepo, deleteRepo, getRepoFolders, createRepoFolder, getNotes, createNote, updateNote } = require('../controllers/repoController')
const protect = require('../middleware/auth')

router.get('/', protect, getRepos)
router.get('/:id', protect, getRepo)
router.get('/:id/folders', protect, getRepoFolders)
router.get('/:id/notes', protect, getNotes)
router.post('/', protect, createRepo)
router.post('/folders', protect, createRepoFolder)
router.post('/notes', protect, createNote)
router.put('/:id', protect, updateRepo)
router.put('/:id/notes', protect, updateNote)
router.delete('/:id', protect, deleteRepo)

module.exports = router