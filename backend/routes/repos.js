const express = require('express')
const router = express.Router()
const { getRepo, getRepos, createRepo, updateRepo, deleteRepo, getRepoFolders, createRepoFolder, getNotes, createNote, updateNote, getNote, getRepoFolder } = require('../controllers/repoController')
const protect = require('../middleware/auth')

router.get('/', protect, getRepos)
router.get('/:id', protect, getRepo)
router.get('/:id/:parent/folders', protect, getRepoFolders)
router.get('/:id/folder', protect, getRepoFolder)
router.get('/:id/:parent/notes', protect, getNotes)
router.get('/:id/notes', protect, getNote)
router.post('/', protect, createRepo)
router.post('/folders', protect, createRepoFolder)
router.post('/notes', protect, createNote)
router.put('/:id', protect, updateRepo)
router.put('/:id/notes', protect, updateNote)
router.delete('/:id', protect, deleteRepo)

module.exports = router