const pool = require('../db');

const getAuthInfo = async (req, res) => {
  const token = req.headers('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied.' })
  }

  try {
    // Here is where to decoding of the jwt auth token happens
    // const decoded = jwt.verify(token, config.get('JWT_SECRET'));
    // req.user = decoded;
    req.user = {
      email: 'alonzuman7@gmail.com',
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Token not valid' })
  }
}

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

module.exports = { getAuthInfo, getUser, signUp, signIn, deleteUser }