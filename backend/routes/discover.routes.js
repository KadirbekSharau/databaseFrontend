const Router = require('express')
const router = new Router()
const discoverController = require('../controllers/discover.controller')

router.get('/', discoverController.getAllDiscovers)
router.get('/:cname/:disease_code', discoverController.getDiscover)
router.post('/', discoverController.createDiscover)
router.put('/', discoverController.updateDiscover)
router.delete('/:cname/:disease_code', discoverController.deleteDiscover)

module.exports = router