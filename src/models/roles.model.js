import { pool } from '../config/db.js'

const all = async () => {
  const [roles] = await pool.query('SELECT * FROM roles')
  return roles
}
export default { all }
