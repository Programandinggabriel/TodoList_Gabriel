const todoRouter = require('../routes/todo')

module.exports = [
    {
        path: '/todo',
        routes: todoRouter
    }
]