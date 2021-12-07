const db = require('../db')

class RecordController {
    async  createRecord(req, res) {
        const {email, cname, disease_code, total_deaths, total_patients} = req.body
        const newRecord = await db.query(
            'INSERT INTO record (email, cname, disease_code, total_deaths, total_patients) values ($1, $2, $3, $4, $5) RETURNING *',
            [email, cname, disease_code, total_deaths, total_patients]
        ) 
        res.json(newRecord)
    }

    async  getAllRecords(req, res) {
        const allRecords = await db.query(
            'SELECT * FROM record'
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(allRecords.rows)
    }

    async  getRecord(req, res) {
        const email = req.params.email
        const cname = req.params.cname
        const disease_code = req.params.disease_code
        const record = await db.query(
            'SELECT * FROM record WHERE email = $1 AND cname = $2 AND disease_code = $3', 
            [email, cname, disease_code]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(record.rows[0])
    }

    async  updateRecord(req, res) {
        const {email, cname, disease_code, total_deaths, total_patients} = req.body
        const updatedRecord = await db.query(
            'UPDATE record SET total_deaths = $4, total_patients = $5 WHERE email = $1 AND cname = $2 AND disease_code = $3 RETURNING *',
            [email, cname, disease_code, total_deaths, total_patients]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(updatedRecord.rows[0])
    }

    async  deleteRecord(req, res) {
        const email = req.params.email
        const cname = req.params.cname
        const disease_code = req.params.disease_code
        const record = await db.query(
            'DELETE * FROM record WHERE email = $1 AND cname = $2 AND disease_code = $3', 
            [email, cname, disease_code]
        )
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(record.rows[0]) 
    }
}

module.exports = new RecordController()