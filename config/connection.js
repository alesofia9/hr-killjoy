const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection(
    {
      host: '127.0.0.1',
      //host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      //
      // MySQL password
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
    },
    console.log(`Connected to the employees_db database.`)
  );

  module.exports = connection;