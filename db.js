const {Pool} = require('pg')

const pool = new Pool({
  user:'postgres',
  password:'123',
  host: 'localhost',
  port: 5432,
  database: 'koa'
})

module.exports = pool