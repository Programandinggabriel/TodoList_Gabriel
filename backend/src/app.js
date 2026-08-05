const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middleware/errorHandler')
const errorNotFound = require('./middleware/notFound')

require('dotenv').config()

const app = express()

//Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//Routes
routes.forEach((r) => {
    app.use(r.path, r.routes)
})

app.use(errorNotFound) //Caso no existe ruta
app.use(errorHandler)


app.listen(process.env.PORT, () => {
    console.log('API Listen port ', 5000)
})
