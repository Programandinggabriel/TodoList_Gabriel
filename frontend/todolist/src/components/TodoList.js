import TodoItem from "./TodoItem";

function TodoList(
    {
        todoArray,
        getTodos
    }
){
    return(
        <ul className="list-group mb-0">
            {todoArray.map((todo) => {
                return <TodoItem
                        id={todo.id} 
                        title={todo.title} 
                        completed={todo.completed}
                        getTodos={getTodos}
                        key={todo.id}
                    />
            })}
        </ul>
    )
}

export default TodoList;