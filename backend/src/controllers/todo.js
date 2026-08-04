const todoService = require('../services/todo')

const getTodos = async (req, res) => {
    try{
        const allTodos = await todoService.getTodos()
        res.status(200).json(allTodos).send()
    }catch(error){
        res.status(400).send()
    }
}

const createTodo = async (req, res) => {
    try{
        const newTodo = await todoService.createTodo(req.body)
        res.status(201).json(newTodo).send()
    }catch(error){
        res.status(400)
            .json({message: error.message})
            .send()
    }
}

const updateTodo = async (req, res) => {
    try{
        const updatedTodo = await todoService.updateTodo(req.params.id, req.body)
        res.json(updatedTodo).send()
    }catch(error){
        res.status(400)
            .json({message: error.message})
            .send()
    }
}

const deleteTodo = async (req, res) => {
    try{
        const deleted = await todoService.deleteTodo(req.params.id)
        if (deleted === 0){
            res.status(400)
                .json({message: 'No se encontro la tarea a eliminar'})
                .send()
        }else{
            res.status(200).send()
        }
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
