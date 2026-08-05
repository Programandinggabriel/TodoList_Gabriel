const todoModel = require('../models/todo')


const getTodos = async() => {
    const todos = await todoModel.get()
    return todos;
}

const createTodo = async (todo) => {
    if (!todo.title){
        throw new Error('El titulo de la tarea es requerido')
    }
    
    const newTodo = await todoModel.create(todo.title)
    return newTodo
}

const updateTodo = async (id, todo) => {
    if (typeof(todo.title) === 'undefined'){
        throw new Error('El titulo de la tarea es requerido')
    }
    if (typeof(todo.completed) === 'undefined'){
        throw new Error('El estado completado de la tarea es requerido')
    }
    
    const updatedTodo = await todoModel.update(id, todo.title, todo.completed)
    return updatedTodo
}

const deleteTodo = async (id) => {
    return await todoModel.remove(id);
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}