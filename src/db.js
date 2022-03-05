const { Pool } = require("pg")
// Coloca aquí tus credenciales
const pool = new Pool({
  user: "alecsNotes",
  host: "alecsnotes.ch5zttguuk8f.us-east-1.rds.amazonaws.com",
  database: "alecsNotes",
  password: "dedosmascados",
  port: 5432,
});
module.exports = pool;