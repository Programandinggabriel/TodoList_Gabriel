const todoModel = require('../models/todo')


const getTodos = async() => {
    const todos = await todoModel.get()
    return todos;
}

const createTodo = async (todo) => {
    const newTodo = await todoModel.create(todo)
    return newTodo
}

const updateTodo = async (id, todo) => {
    const updatedTodo = await todoModel.update(id, todo)
    return updatedTodo
}

const deleteTodo = async (id) => {
    await todoModel.remove(id)
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}