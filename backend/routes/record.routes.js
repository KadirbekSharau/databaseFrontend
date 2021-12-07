const Router = require('express')
const router = new Router()
const recordController = require('../controllers/record.controller')

router.get('/', recordController.getAllRecords)
router.get('/:email/:cname/:disease_code', recordController.getRecord)
router.post('/', recordController.createRecord)
router.put('/', recordController.updateRecord)
router.delete('/:email/:cname/:disease_code', recordController.deleteRecord)

module.exports = router