const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const diseaseRouter = require('./routes/disease.routes')
const doctorRouter = require('./routes/doctor.routes')
const recordRouter = require('./routes/record.routes')
const userRouter = require('./routes/user.routes')
const countryRouter = require('./routes/country.routes')
const specializeRouter = require('./routes/specialize.routes')
const publicServantRouter = require('./routes/publicServant.routes')
const diseaseTypeRouter = require('./routes/diseaseType.routes')
const discoverRouter = require('./routes/discover.routes')




app.use(express.json())
app.disable('etag')
app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api/user', userRouter)
app.use('/api/country', countryRouter)
app.use('/api/disease', diseaseRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/record', recordRouter)
app.use('/api/specialize', specializeRouter)
app.use('/api/publicServant', publicServantRouter)
app.use('/api/diseaseType', diseaseTypeRouter)
app.use('/api/discover', discoverRouter)

module.exports = app