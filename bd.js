const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',  // host de MySQL
  user: 'root',       // usuario de MySQL
  password: '196014', // contraseña de MySQL
  database: 'pokemon' // nombre de la base de datos
});

module.exports = pool;