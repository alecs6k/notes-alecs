const { Pool } = require("pg");
const { db } = require("./config");

// Coloca aquí tus credenciales
const pool = new Pool({
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  port: db.port,
  ssl: {
    rejectUnauthorized: false,
  },
});
module.exports = pool;
