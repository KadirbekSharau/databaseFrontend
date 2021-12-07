const db = require('../db')

class DoctorController {
    async  createDoctor(req, res) {
        const {email, degree} = req.body
        const newDoctor = await db.query(
            'INSERT INTO doctor (email, degree) values ($1, $2) RETURNING *',
            [email, degree]
        ) 
        res.json(newDoctor.rows[0])
    }

    async  getAllDoctors(req, res) {
        const allDoctors = await db.query(
            'SELECT * FROM doctor'
        )
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(allDoctors.rows)
    }

    async  getAllDoctorsByDiseases(req, res) {
        const {id, email} = req.body
        const allDoctors = await db.query(
            'SELECT email, disease_code, pathogen FROM doctor, disease WHERE doctor.email = $2 AND disease.id = $1', 
            [id, email]
        )
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(allDoctors.rows)
    }

    async  getDoctor(req, res) {
        const email = req.params.email
        const doctor = await db.query(
            'SELECT * FROM doctor WHERE email = $1', [email]
        ) 
        res.json(doctor.rows[0])
    }

    async  updateDoctor(req, res) {
        const {email, degree} = req.body
        const updatedDoctor = await db.query(
            'UPDATE doctor SET degree = $2 WHERE email = $1 RETURNING *',
            [email, degree]
        )
        console.log(email, degree) 
        res.setHeader('Last-Modified', (new Date()).toUTCString()) 
        res.json(updatedDoctor.rows[0])
    }

    async  deleteDoctor(req, res) {
        const email = req.params.email
        const doctor = await db.query(
            'DELETE * FROM doctor WHERE email = $1', [email]
        )
        res.json(doctor.rows[0]) 
    }
}

module.exports = new DoctorController()