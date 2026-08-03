const fs = require('fs')
const jsonTodosRoute = './data/todos.json'

function writeTodo(todos){
     fs.writeFileSync(jsonTodosRoute, JSON.stringify(todos, null, " "));
}

function getTodos(){
    let jsonTodos;
    const todos = fs.readFileSync(jsonTodosRoute, 'utf-8')
    try{
        jsonTodos = JSON.parse(todos)
    }catch(error){
        jsonTodos = []
    }

    return jsonTodos
}

function createTodo(todo){
    const allTodos = getTodos()
    const id = Math.floor(Date.now() + Math.random())
    
    todo.id = id
    allTodos.push(todo)
   
    writeTodo(allTodos)    
    return todo;
}

function updateTodo(id, todo){
    const allTodos = getTodos()
    const findTodo = allTodos.find((todo) => todo.id === id)

    findTodo.name = todo.name
    writeTodo(allTodos)
    return findTodo;
}

function deleteTodo(id){
    const allTodos = getTodos()
    const newTodos = allTodos.filter((todo) => todo.id !== id)
    writeTodo(newTodos)

    return newTodos;
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}