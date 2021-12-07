const Router = require('express')
const router = new Router()
const diseaseController = require('../controllers/disease.controller')

router.get('/', diseaseController.getAllDiseases)
router.get('/:disease_code', diseaseController.getDisease)
router.post('/', diseaseController.createDisease)
router.put('/', diseaseController.updateDisease)
router.delete('/disease_code', diseaseController.deleteDisease)

module.exports = router