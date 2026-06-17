const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const { getfiles, uploadFiles, deleteFile, getAllfiles } = require('../controllers/fileController')
const protect = require('../middleware/auth')

router.get('/:repoId', protect, getfiles)
router.get('/:userId/files', protect, getAllfiles)
router.post('/upload', protect, upload.array('files'), uploadFiles);
router.delete('/:repoId/:fileId', protect, deleteFile)

module.exports = router