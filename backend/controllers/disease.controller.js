const db = require('../db')

class DiseaseController {
    async  createDisease(req, res) {
        const {disease_code, pathogen, description, id} = req.body
        const newDisease = await db.query(
            'INSERT INTO disease (disease_code, pathogen, description, id) values ($1, $2, $3, $4) RETURNING *',
            [disease_code, pathogen, description, id]
        ) 
        res.json(newDisease.rows[0])
    }

    async  getAllDiseases(req, res) {
        const allDisease = await db.query(
            'SELECT * FROM disease'
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(allDisease.rows)
    }

    async  getDisease(req, res) {
        const disease_code = req.params.disease_code
        const disease = await db.query(
            'SELECT * FROM disease WHERE disease_code = $1', [disease_code]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(disease.rows[0])
    }

    async  updateDisease(req, res) {
        const {disease_code, pathogen, description, id} = req.body
        const updatedDisease = await db.query(
            'UPDATE disease SET pathogen = $2,  WHERE disease_code = $1 RETURNING *',
            [disease_code, pathogen, description, id]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(updatedDisease.rows[0])
    }

    async  deleteDisease(req, res) {
        const disease_code = req.params.disease_code
        const disease = await db.query(
            'DELETE * FROM disease WHERE disease_code = $1', [disease_code]
        )
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(disease.rows[0]) 
    }
}

module.exports = new DiseaseController()