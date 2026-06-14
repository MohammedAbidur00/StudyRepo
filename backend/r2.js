// backend/r2.js
const { S3Client, PutObjectCommand, DeleteObjectCommand, DeleteObjectsCommand } = require('@aws-sdk/client-s3')
const { v4: uuidv4 } = require('uuid')
const path = require('path')

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
  }
})

async function uploadToR2(file) {
  const ext = path.extname(file.originalname)
  const filename = uuidv4() + ext  // unique filename e.g. "abc123.pdf"

  await r2.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: filename,
    Body: file.buffer,
    ContentType: file.mimetype,
  }))

  return {
    filename,
    url: `${process.env.R2_PUBLIC_URL}/${filename}`
  }
}

async function deleteFromR2(filename) {
  await r2.send(new DeleteObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: filename,
  }))
}

async function deleteMultipleFromR2(filenames) {
  await r2.send(new DeleteObjectsCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Delete: {
      Objects: filenames.map(filename => ({ Key: filename })),
      Quiet: true  // don't return info about each deleted file
    }
  }))
}

module.exports = { uploadToR2, deleteFromR2, deleteMultipleFromR2 }