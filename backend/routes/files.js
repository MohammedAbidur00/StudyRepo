const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const { getfiles, uploadFiles } = require('../controllers/fileController')
const protect = require('../middleware/auth')

router.get('/:repoId', protect, getfiles)
router.post('/upload', protect, upload.array('files'), uploadFiles);
router.delete('/:id', protect)

module.exports = router