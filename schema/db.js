const mysql = require("mysql");

function connect() {
  return mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "newsdb",
  });
}

module.exports = { connect };
