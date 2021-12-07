const db = require('../db')

class PublicServantController {
    async  createPublicServant(req, res) {
        const {email, department} = req.body
        const newPublicServant = await db.query(
            'INSERT INTO publicservant (email, department) values ($1, $2) RETURNING *',
            [email, department]
        ) 
        res.json(newPublicServant.rows[0])
    }

    async  getAllPublicServants(req, res) {
        const allpbs = await db.query(
            'SELECT * FROM publicServant'
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(allpbs.rows)
    }

    async  getPublicServant(req, res) {
        const email = req.params.email
        const pb = await db.query(
            'SELECT * FROM publicServant WHERE email = $1', [email]
        ) 
        res.json(pb.rows[0])
    }

    async  updatePublicServant(req, res) {
        const {email, department} = req.body
        const updatedPb = await db.query(
            'UPDATE publicServant SET department = $2 WHERE email = $1 RETURNING *',
            [email, department]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(updatedPb.rows[0])
    }

    async  deletePublicServant(req, res) {
        const email = req.params.email
        const pb = await db.query(
            'DELETE * FROM publicServant WHERE email = $1', [email]
        )
        //res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(pb.rows[0]) 
    }
}

module.exports = new PublicServantController()