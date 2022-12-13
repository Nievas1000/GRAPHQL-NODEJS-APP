const mysql = require('mysql2')
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    database: process.env.DATABASE,
})

module.exports = pool;