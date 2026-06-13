const multer = require('multer')

const upload = multer({
  storage: multer.memoryStorage(), // keep file in memory, send to R2
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf',
                     'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                     'text/plain']
    if (allowed.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('File type not allowed'))
    }
  }
})

module.exports = upload