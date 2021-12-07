const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.getAllUsers)
router.get('/:email', userController.getUser)
router.post('/register', userController.createUser)
router.put('/', userController.updateUser)
router.delete('/:email', userController.deleteUser)

module.exports = router