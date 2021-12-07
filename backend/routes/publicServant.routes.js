const Router = require('express')
const router = new Router()
const publicServantController = require('../controllers/publicServant.controller')

router.get('/', publicServantController.getAllPublicServants)
router.get('/:email', publicServantController.getPublicServant)
router.post('/', publicServantController.createPublicServant)
router.put('/', publicServantController.updatePublicServant)
router.delete('/', publicServantController.deletePublicServant)

module.exports = router