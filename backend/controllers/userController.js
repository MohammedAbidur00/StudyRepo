const pool = require('../db')

const getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username, email FROM users')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
}

const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query('SELECT id, username, email FROM users WHERE id = $1', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
}

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body
    const result = await pool.query(
      'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
      [username, email]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { username, email } = req.body
    const result = await pool.query(
      'UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *',
      [username, email, id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    if (err.code === '23505') {
      res.status(409).json({ error: 'Username already taken' })
    } else {
      res.status(500).json({ error: 'Something went wrong' })
    }
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json({ message: 'User deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
}

const getUserStats = async (req, res) => {
  try {
    const { id } = req.params

    const result = await pool.query(
      `SELECT
        COALESCE(SUM(EXTRACT(EPOCH FROM (ended_at - started_at))), 0) AS total_seconds,
        COALESCE(SUM(EXTRACT(EPOCH FROM (ended_at - started_at))) FILTER (WHERE DATE(started_at) = CURRENT_DATE), 0) AS seconds_today,
        COALESCE(SUM(notes_reviewed), 0) AS total_notes,
        COALESCE(SUM(notes_reviewed) FILTER (WHERE DATE(started_at) = CURRENT_DATE), 0) AS notes_today,
        COALESCE(SUM(flashcards_reviewed), 0) AS total_flashcards,
        COALESCE(SUM(flashcards_reviewed) FILTER (WHERE DATE(started_at) = CURRENT_DATE), 0) AS flashcards_today
      FROM useranalytics
      WHERE user_id = $1 AND ended_at IS NOT NULL`,
      [id]
    )

    const streak = await pool.query('SELECT * FROM userstats WHERE user_id = $1', [id])
    if (streak.rows.length === 0) {
      return res.status(404).json({ error: "Streak not found" })
    }

    res.status(200).json({main: result.rows[0], other: streak.rows[0]})
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Something went wrong" })
  }
}

const addUserStats = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query('INSERT INTO userstats (user_id) VALUES ($1) RETURNING *', [id])
    res.status(200).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Something went wrong" })
  }
}

const getUserAnalytics = async (req, res) => {
  try {
    const { userId } = req.params
    const result = await pool.query("SELECT DATE(started_at) AS day, SUM(EXTRACT(EPOCH FROM (ended_at - started_at)) / 3600) AS hours FROM useranalytics WHERE user_id = $1 AND ended_at IS NOT NULL AND started_at >= date_trunc('week', now()) GROUP BY DATE(started_at) ORDER BY day", [userId])
    if (result.rows === 0) {
      return res.status(200).json(result.rows)
    }

    res.status(200).json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Something went wrong" })
  }
}

const getGoals = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await pool.query('SELECT id, username, email FROM users WHERE id = $1', [userId])
    if (user.rows.length === 0) {
      return res.status(404).json({ error: "User not found" })
    }
    const result = await pool.query('SELECT * FROM usergoals WHERE user_id = $1', [userId])
    if (result.rows.length === 0) {
      return res.status(200).json(result.rows)
    }
    res.status(200).json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Something went wrong" })
  }
}

const getGoal = async (req, res) => {
  try {
    const { goalId } = req.params
    const result = await pool.query('SELECT * FROM usergoals WHERE id = $1', [goalId])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Goal not found" })
    }
    res.status(200).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Something went wrong" })
  }
}

const createGoal = async (req, res) => {
  try {
    const { userId } = req.params
    const { goalTimeframe, goalType, endTime, goalLength} = req.body
    const user = await pool.query('SELECT id, username, email FROM users WHERE id = $1', [userId])
    if (user.rows.length === 0) {
      return res.status(404).json({ error: "User not found" })
    }
    const result = await pool.query('INSERT INTO usergoals (user_id, goal_timeframe, goal_type, end_time, goal_length) VALUES ($1, $2, $3, $4, $5) RETURNING *', [userId, goalTimeframe, goalType, endTime, goalLength])
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Something went wrong" })
  }
}

const updateGoalStreakStatus = async (req, res) => {
  try {
    const { goalId } = req.params
    const { inStreak } = req.body
    const result = await pool.query('UPDATE usergoals SET in_streak = $1 WHERE id = $2 RETURNING *', [inStreak, goalId])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" })
    }
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something wnet wrong" })
  }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, getUserStats, addUserStats, getUserAnalytics, getGoals, getGoal, createGoal , updateGoalStreakStatus}