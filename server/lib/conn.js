const mysql = require('mysql')
const config = require('config')

const conn = mysql.createConnection({
  user: config.get('db.user'),
  password: config.get('db.password'),
  hostname: config.get('db.hostname'),
  database: config.get('db.database')
})

conn.connect()

module.exports = conn