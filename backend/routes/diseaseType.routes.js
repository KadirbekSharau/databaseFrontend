const Router = require('express')
const router = new Router()
const diseaseTypeController = require('../controllers/diseaseType.controller')

router.get('/', diseaseTypeController.getAllDiseaseTypes)
router.get('/:id', diseaseTypeController.getDiseaseType)
router.post('/', diseaseTypeController.createDiseaseType)
router.put('/', diseaseTypeController.updateDiseaseType)
router.delete('/:id', diseaseTypeController.deleteDiseaseType)

module.exports = router