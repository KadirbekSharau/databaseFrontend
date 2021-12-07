const db = require('../db')

class DiscoverController {
    async  createDiscover(req, res) {
        const {cname, disease_code, first_enc_date} = req.body
        const newDiscover = await db.query(
            'INSERT INTO discover (cname, disease_code, first_enc_date) values ($1, $2, $3) RETURNING *',
            [cname, disease_code, first_enc_date]
        ) 
        res.json(newDiscover.rows[0])
    }

    async  getAllDiscovers(req, res) {
        const allDiscover = await db.query(
            'SELECT * FROM discover'
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(allDiscover.rows)
    }

    async  getDiscover(req, res) {
        const cname = req.params.cname
        const disease_code = req.params.disease_code
        const discover = await db.query(
            'SELECT * FROM discover WHERE cname = $1 and disease_code = $2', [cname, disease_code]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(discover.rows[0])
    }

    async  updateDiscover(req, res) {
        const {cname, disease_code, first_enc_date} = req.body
        const updatedDiscover = await db.query(
            'UPDATE discover SET first_enc_date = $3, WHERE cname = $1 AND disease_code = $2 RETURNING *',
            [cname, disease_code, first_enc_date]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(updatedDiscover.rows[0])
    }

    async  deleteDiscover(req, res) {
        const cname = req.params.cname
        const disease_code = req.params.disease_code
        const discover = await db.query(
            'DELETE * FROM discover WHERE cname = $1 AND disease_code = $2', [cname, disease_code]
        )
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(discover.rows[0]) 
    }
}

module.exports = new DiscoverController()