const Router = require('express')
const router = new Router()
const doctorController = require('../controllers/doctor.controller')

router.get('/', doctorController.getAllDoctors)
router.get('/:email', doctorController.getDoctor)
router.get('/diseases', doctorController.getAllDoctorsByDiseases)
router.post('/', doctorController.createDoctor)
router.put('/', doctorController.updateDoctor)
router.delete('/:email', doctorController.deleteDoctor)

module.exports = router