const db = require('../db')

class DiseaseTypeController {
    async  createDiseaseType(req, res) {
        const {id, description} = req.body
        const newDiseaseType = await db.query(
            'INSERT INTO diseasetype (id, description) values ($1, $2) RETURNING *',
            [id, description]
        ) 
        res.json(newDiseaseType.rows[0])
    }

    async  getAllDiseaseTypes(req, res) {
        const allDiseaseTypes = await db.query(
            'SELECT * FROM diseaseType'
        ) 
        res.json(allDiseaseTypes)
    }

    async  getDiseaseType(req, res) {
        const id = req.params.id
        const diseaseType = await db.query(
            'SELECT * FROM diseaseType WHERE id = $1', [id]
        ) 
        res.json(diseaseType.rows[0])
    }

    async  updateDiseaseType(req, res) {
        const {id, description} = req.body
        const updatedDiseaseType = await db.query(
            'UPDATE diseaseType SET description = $2, WHERE id = $1 RETURNING *',
            [id, description]
        ) 
        res.json(updatedDiseaseType.rows[0])
    }

    async  deleteDiseaseType(req, res) {
        const id = req.params.id
        const diseaseType = await db.query(
            'DELETE * FROM diseaseType WHERE id = $1', [id]
        )
        res.json(diseaseType.rows[0]) 
    }
}

module.exports = new DiseaseTypeController()