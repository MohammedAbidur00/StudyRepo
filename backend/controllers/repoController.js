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
        console.log(err)
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
        console.log(err)
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
        console.log(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const updateRepo = async (req, res) => {
    try {
        const user_id = req.user.id
        const { reponame, repodescription } = req.body
        const result = await pool.query('UPDATE userrepos SET reponame = $1, repodescription = $2 WHERE user_id = $3 RETURNING *',
        [reponame, repodescription, user_id])
        if ((await result).rows.length === 0) {
            return res.status(404).json({ error: "Repo not found" })
        }
        res.json(result.rows[0])
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

const deleteRepo = async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query('DELETE FROM userrepos WHERE id = $1', [id])
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "X not found" });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Something went wrong" })
    }
}

module.exports = { getRepo, getRepos, createRepo, updateRepo, deleteRepo }