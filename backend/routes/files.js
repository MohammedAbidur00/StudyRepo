const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const { getfiles, uploadFiles, deleteFile } = require('../controllers/fileController')
const protect = require('../middleware/auth')

router.get('/:repoId', protect, getfiles)
router.post('/upload', protect, upload.array('files'), uploadFiles);
router.delete('/:repoId/:fileId', protect, deleteFile)

module.exports = router