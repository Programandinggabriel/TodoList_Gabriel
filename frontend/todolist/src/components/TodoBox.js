import { useEffect, useState } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import { api } from "../services/axios";

function TodoBox(){
    const [todoArray, setTodoArray] = useState([])
    
    const getTodos = async() => {
        api.get('/todo')
            .then((response) => {setTodoArray(response.data)})
            .catch((error) => console.log(error))
    }

    useEffect(()=> {
        getTodos()
    },[])
    
    return (
        <div className="col col-xl-10">
            <div className="card bg-dark text-white" style={{borderRadius: '15px'}}>
                <div className="card-body p-5">
                    <h6 className="mb-3">Todo list Gabriel</h6>
                    <FormTodo getTodos={getTodos}/>
                    <TodoList 
                        todoArray={todoArray}
                        getTodos={getTodos}
                    />
                </div>
            </div>
        </div>    
    )
}

export default TodoBox;