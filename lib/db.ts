import { Pool } from "pg"

// Create a new pool instance with your PostgreSQL connection string
const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
})

export default pool
