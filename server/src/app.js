const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize} = require('../models')
const app = express()
const port = 8081

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('../routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        }) 
    })
