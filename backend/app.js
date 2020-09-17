const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

app.get("/api/", (req, res) => res.json({message: "Welcome to api"}))
//require('./routes/clientes')(app)
const ClienteRoute = require('./routes/clientes')
ClienteRoute(app)

const ReparacionesRoute = require('./routes/reparaciones')
ReparacionesRoute(app)

const AutoRoute = require('./routes/autos')
AutoRoute(app)
module.exports = app