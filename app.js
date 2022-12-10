
const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require("cors")


const playerRouter = require('./routes/index')
const apiRouter = require('./routes/consultaApi')
const {connect} = require('./db/db')


app.use(logger('dev'))
app.use(express.json())
app.use(cors())

app.use("/player", playerRouter)
app.use("/pokeApi", apiRouter)
connect()

module.exports = app
