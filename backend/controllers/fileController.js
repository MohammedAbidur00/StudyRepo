const pool = require('../db')
const { uploadToR2, deleteFromR2, deleteMultipleFromR2 } = require('../r2')

async function saveDocumentToDB(file, url, repoId) { 
    const result = await pool.query(
      `INSERT INTO documents (repo_id, filename, url, file_type, file_size)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [repoId, file.originalname, url, file.mimetype, file.size]
    )
    return result.rows[0]
}

async function deleteDocumentFromDB(fileId) {
    const result = await pool.query(
        'DELETE FROM documents WHERE id = $1 RETURNING *',
        [fileId]
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
            return res.status(200).json(result.rows)
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
        
        const uploaded = await Promise.all(
            req.files.map(async file => {
                const { url } = await uploadToR2(file)
                const doc = await saveDocumentToDB(file, url, repoId)
                return doc
            })
        )
        res.status(200).json({ files: uploaded })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const deleteFile = async (req, res) => {
    try {
        const { repoId, fileId } = req.params
        const repo = await pool.query('SELECT * FROM userrepos WHERE id = $1', [repoId])
        if (repo.rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        }

        const result = await deleteDocumentFromDB(fileId);
        if (!result) {
            return res.status(404).json({ error: "Document not found" })
        }

        const r2Key = result.url.replace(`${process.env.R2_PUBLIC_URL}/`, '')

        await deleteFromR2(r2Key)

        res.status(200).json({ message: "File Deleted Successfully" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

module.exports = { getfiles, uploadFiles, deleteFile }