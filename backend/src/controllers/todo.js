const todoService = require('../services/todo')

const getTodos = async (req, res) => {
    try{
        const allTodos = await todoService.getTodos()
        res.status(200).json(allTodos)
    }catch(error){
        res.status(400)
    }
}

const createTodo = async (req, res) => {
    try{
        const newTodo = await todoService.createTodo(req.body)
        res.json(newTodo)
    }catch(error){
        res.status(400)
    }
}

const updateTodo = async (req, res) => {
    try{
        const updatedTodo = await todoService.updateTodo(req.params.id, req.body)
        res.json(updatedTodo)
    }catch(error){
        res.status(400)
    }
}

const deleteTodo = async (req, res) => {
    try{
        await todoService.deleteTodo(req.params.id)
        res.status(200).send()
    }catch(error){
        res.status(400).send()
    }
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}
