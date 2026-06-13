const pool = require('../db')
const { uploadToR2, deleteFromR2 } = require('../r2')

async function saveDocumentToDB(file, url, repoId) {
    console.log("jnhkjj")
    const result = await pool.query(
      `INSERT INTO documents (repo_id, filename, url, file_type, file_size)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [repoId, file.originalname, url, file.mimetype, file.size]
    )
    return result.rows[0]
}

const getfiles = async (req, res) => {
    try {
        const { repoId } = req.params
        const repo = await pool.query('SELECT * FROM userrepos WHERE id = $1', [repoId])
        if (repo.rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        }

        const result = await pool.query('SELECT * FROM documents WHERE repo_id = $1', [repoId])
        if (result.rows.length === 0) {
            return res.status(200).json({ message: "No documents yet" })
        }

        res.status(200).json(result.rows)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" })
    }
}

const uploadFiles = async (req, res) => {
    try {
        const { repoId } = req.body
        const repo = await pool.query('SELECT * FROM userrepos WHERE id = $1', [repoId])
        if (repo.rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        }
        
        console.log('req.files:', req.files)
        const uploaded = await Promise.all(
            req.files.map(async file => {
                console.log('uploading file:', file.originalname)  // check 1
                const { url } = await uploadToR2(file)
                console.log('uploaded to R2, url:', url)           // check 2
                const doc = await saveDocumentToDB(file, url, repoId)
                console.log('saved to DB:', doc)                   // check 3
                return doc
            })
        )
        res.status(200).json({ files: uploaded })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

module.exports = { getfiles, uploadFiles }