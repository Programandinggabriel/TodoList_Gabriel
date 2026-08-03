const express = require('express')
const morgan = require('morgan')
const todos = require('./todos')
require('dotenv').config()

const app = express()

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.get('/todos', (req, res) => {
    const allTodos = todos.getTodos()
    
    res.json(allTodos)
})

app.post('/todo', (req, res) => {
    const newTodo = req.body
    const created = todos.createTodo(newTodo)

    res.json(created)
})

app.put('/todo/:id', (req, res) => {
    const id = Number(req.params.id)
    const todoData = req.body
    const updatedTodo = todos.updateTodo(id, todoData)

    res.json(updatedTodo)
})

app.delete('/todo/:id', (req, res) => {
    const id = Number(req.params.id)
    const newTodos = todos.deleteTodo(id)

    res.json(newTodos)
})

app.listen(process.env.APP_PORT, () => {
    console.log('API Listen port ', 5000)
})
