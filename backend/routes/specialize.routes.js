const Router = require('express')
const router = new Router()
const specializeController = require('../controllers/specialize.controller')

router.get('/', specializeController.getAllSpecializes)
router.get('/:id/:email', specializeController.getSpecialize)
router.post('/', specializeController.createSpecialize)
router.put('/', specializeController.updateSpecialize)
router.delete('/:id/:email', specializeController.deleteSpecialize)

module.exports = router