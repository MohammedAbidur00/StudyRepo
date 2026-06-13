const pool = require('../db')

const getRepo = async (req, res) => {
    try {
        const user_id = req.user.id
        const { id } = req.params
        const result = await pool.query('SELECT * FROM userrepos WHERE id = $1 AND user_id = $2', [id, user_id])
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Repo not found' })
        }
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const getRepos = async (req, res) => {
    try {
        const user_id = req.user.id
        const result = await pool.query('SELECT * FROM userrepos WHERE user_id = $1', [user_id])
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Repo not found' })
        }
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const createRepo = async (req, res) => {
    try {
        const user_id = req.user.id
        const { reponame, repodescription } = req.body
        const result = await pool.query('INSERT INTO userrepos (user_id, reponame, repodescription) VALUES ($1, $2, $3) RETURNING *',
        [user_id, reponame, repodescription])
        res.status(201).json(result.rows[0])
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const updateRepo = async (req, res) => {
    try {
        const user_id = req.user.id
        const { reponame, repodescription } = req.body
        const result = await pool.query('UPDATE userrepos SET reponame = $1, repodescription = $2 WHERE user_id = $3 RETURNING *',
        [reponame, repodescription, user_id])
        if ((result).rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        }
        res.json(result.rows[0])
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const deleteRepo = async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query('DELETE FROM userrepos WHERE id = $1 RETURNING *', [id])
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" });
        }
        
        res.status(200).json({ message: "StudyRepo successfully deleted."});
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const getRepoFolders = async (req, res) => {
    try {
        const { id, parent } = req.params
        const repo = await pool.query('SELECT * FROM userrepos WHERE id = $1', [id])
        if (repo.rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        }

        if (parent === "0") {
            const folders = await pool.query('SELECT * FROM repofolders WHERE repo_id = $1 AND parent_folder_id IS NULL', [id])
            res.status(200).json(folders.rows)
        } else {
            const folders = await pool.query('SELECT * FROM repofolders WHERE repo_id = $1 AND parent_folder_id = $2', [id, parent])
            res.status(200).json(folders.rows)
        }

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const getRepoFolder = async (req, res) => {
    try {
        const { id } = req.params

        const result = await pool.query('SELECT * FROM repofolders WHERE id = $1', [id])
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Folder not found" })
        }

        res.status(200).json(result.rows[0])
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const createRepoFolder = async (req, res) => {
    try {
        const { id, folderName , folderParent} = req.body
        const repo = await pool.query('SELECT * FROM userrepos WHERE id = $1', [id]);
        if (repo.rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        } 
        
        if (folderParent === null) {
            const result = await pool.query('INSERT INTO repofolders (repo_id, foldername) VALUES ($1, $2) RETURNING *', [id, folderName])
            res.status(201).json(result.rows[0]);
        } else {
            const result = await pool.query('INSERT INTO repofolders (repo_id, foldername, parent_folder_id) VALUES ($1, $2, $3) RETURNING *', [id, folderName, folderParent])
            res.status(201).json(result.rows[0]);
        }
    } catch (err) {
        console.error(err)
        if (err.code === "23505") {
            return res.status(409).json({ error: 'Folder with selected foldername in the current directory already exists' })
        }
        res.status(500).json({ error: "Something went wrong" })
    }
}

const getNotes = async (req, res) => {
    try {
        const { id, parent } = req.params
        const repo = await pool.query('SELECT * FROM userrepos WHERE id = $1', [id]);
        if (repo.rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        } 
        
        if (parent === "0") {
            const notes = await pool.query('SELECT * FROM reponotes WHERE repo_id = $1 AND folder_id IS NULL', [id])
            res.status(200).json(notes.rows)
        } else {
            const notes = await pool.query('SELECT * FROM reponotes WHERE repo_id = $1 AND folder_id = $2', [id, parent])
            res.status(200).json(notes.rows)
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const getNote = async (req, res) => {
    try {
        const { id } = req.params
        const note = pool.query('SELECT * FROM reponotes WHERE id = $1', [id]);
        if (note.rows.length === 0) {
            return res.status(404).json({ error: "Note note found" })
        }
        res.status(200).json(note.rows[0]);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const createNote = async (req, res) => {
    try {
        const { id, title, folderId, content } = req.body
        console.log(folderId)
        const repo = await pool.query('SELECT * FROM userrepos WHERE id = $1', [id]);
        if (repo.rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        } 

        const result = await pool.query('INSERT INTO reponotes (repo_id, title, folder_id, content) VALUES ($1, $2, $3, $4) RETURNING *', [id, title, folderId, content])
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const updateNote = async (req, res) => {
    try {
        const { id } = req.params
        const { noteId, noteTitle, noteContent } = req.body
        const repo = await pool.query('SELECT * FROM userrepos WHERE id = $1', [id]);
        if (repo.rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        }

        const result = await pool.query('UPDATE reponotes SET title = $1, content = $2 WHERE id = $3 RETURNING *', [noteTitle, noteContent, noteId])
        if ((result).rows.length === 0) {
            return res.status(404).json({ error: "Note not found" })
        }
        res.json(result.rows[0])
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" })
    }
}

module.exports = { getRepo, getRepos, createRepo, updateRepo, deleteRepo, getRepoFolders, createRepoFolder, getNotes, createNote, updateNote, getNote, getRepoFolder }