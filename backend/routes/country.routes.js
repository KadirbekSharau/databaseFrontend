const Router = require('express')
const router = new Router()
const countryController = require('../controllers/country.controller')

router.get('/', countryController.getAllCountries)
router.get('/:cname', countryController.getCountry)
router.post('/', countryController.createCountry)
router.put('/', countryController.updateCountry)
router.delete('/:cname', countryController.deleteCountry)

module.exports = router