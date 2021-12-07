const db = require('../db')

class SpecializeController {
    async  createSpecialize(req, res) {
        const {id, email} = req.body
        const newSpecialize = await db.query(
            'INSERT INTO specialize (id, email) values ($1, $2) RETURNING *',
            [id, email]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(newSpecialize.rows[0])
    }

    async  getAllSpecializes(req, res) {
        const allSpecializes = await db.query(
            'SELECT * FROM specialize'
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(allSpecializes.rows)
    }

    async  getSpecialize(req, res) {
        const id = req.params.id
        const email = req.params.email
        const specialize = await db.query(
            'SELECT * FROM specialize WHERE id = $1 AND email = $2', 
            [id, email]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(specialize.rows[0])
    }

    async  updateSpecialize(req, res) {
        const {id, email} = req.body
        const updatedSpecialize = await db.query(
            'UPDATE specialize SET email = $1, total_patients = $5 WHERE email = $1 AND cname = $2 AND disease_code = $3 RETURNING *',
            [email, cname, disease_code, total_deaths, total_patients]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(updatedSpecialize.rows[0])
    }

    async  deleteSpecialize(req, res) {
        const id = req.params.id
        const email = req.params.email
        const specialize = await db.query(
            'DELETE * FROM specialize WHERE id = $1 AND email = $2', 
            [id, email]
        )
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(specialize.rows[0]) 
    }
}

module.exports = new SpecializeController()