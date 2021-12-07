const db = require('../db')

class CountryController {
    async  createCountry(req, res) {
        const {cname, population} = req.body
        const newCountry = await db.query(
            'INSERT INTO country (cname, population) values ($1, $2) RETURNING *',
            [cname, population]
        ) 
        res.json(newCountry.rows[0])
    }

    async  getAllCountries(req, res) {
        const allCountries = await db.query(
            'SELECT * FROM country'
        ) 
        res.json(allCountries.rows)
    }

    async  getCountry(req, res) {
        const cname = req.params.cname
        const country = await db.query(
            'SELECT * FROM country WHERE cname = $1', [cname]
        )
        res.json(country.rows[0]) 
    }

    async  updateCountry(req, res) {
        const {cname, population} = req.body
        const updatedCountry = await db.query(
            'UPDATE country SET population = $2, WHERE cname = $1 RETURNING *',
            [cname, population]
        ) 
        res.json(updatedCountry.rows[0])
    }

    async  deleteCountry(req, res) {
        const cname = req.params.cname
        const country = await db.query(
            'DELETE * FROM country WHERE cname = $1', [cname]
        )
        res.json(country.rows[0]) 
    }
}

module.exports = new CountryController()