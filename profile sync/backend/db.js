const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'user_profile',
});
module.exports = pool.promise();