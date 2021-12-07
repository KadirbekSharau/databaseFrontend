const db = require('../db')

class UserController {
    async  createUser(req, res) {
        //console.log(req.body)
        const {email, name, surname, salary, phone, cname} = req.body
        
        const newPerson = await db.query(
            'INSERT INTO users (email, name, surname, salary, phone, cname) values ($1, $2, $3, $4, $5, $6) RETURNING *',
            [email, name, surname, salary, phone, cname]
        ) 
        
        res.json(newPerson)
    }

    async  getAllUsers(req, res) {
        const allUsers = await db.query(
            'SELECT * FROM users'
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(allUsers.rows)
    }

    async  getUser(req, res) {
        const email = req.params.email
        const user = await db.query(
            'SELECT * FROM users WHERE email = $1,'
            [email]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(user.rows[0])
    }

    async  updateUser(req, res) {
        const {email, name, surname, salary, phone, cname} = req.body
        const updatedUser = await db.query(
            'UPDATE users SET surname = $3 WHERE email = $1 RETURNING *',
            [email, name, surname, salary, phone, cname]
        ) 
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(updatedUser.rows[0])
    }

    async  deleteUser(req, res) {
        const email = req.params.email
        const user = await db.query(
            'DELETE * FROM users WHERE email = $1', 
            [email]
        )
        res.setHeader('Last-Modified', (new Date()).toUTCString())
        res.json(user.rows[0]) 
    }
}

module.exports = new UserController()