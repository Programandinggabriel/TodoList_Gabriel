const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')

require('dotenv').config()

const app = express()

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
routes.forEach((r) => {
    app.use(r.path, r.routes)
})


app.listen(process.env.PORT, () => {
    console.log('API Listen port ', 5000)
})
