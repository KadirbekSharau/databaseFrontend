const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "change-in-production",
    database: "csci_db",
    host: "db",
    port: 5432
})

module.exports = pool