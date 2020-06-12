const pool = require('../db');

const getUser = async (req, res) => {
  const id = req.params.id
  try {
    const user = await pool.query(`SELECT * FROM main.users WHERE user_id = ${id}`)
    res.json(user.rows[0]);
  } catch (error) {
    console.log(error);
  }
}
const signUp = (req, res) => res.send('signing up...');
const signIn = (req, res) => res.send('signing in...');
const deleteUser = (req, res) => res.send(`deleting user ${req.params.id}...`)

module.exports = { getUser, signUp, signIn, deleteUser }