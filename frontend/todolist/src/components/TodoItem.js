import { useState } from "react"
import { api } from "../services/axios"

function TodoItem(
    {
        id, 
        title, 
        completed,
        getTodos
    }){
    const [stitle, setTitle] = useState(title);

    const updateTodo = async(id, completed, title) => {
        api.put(`/todo/${id}`, 
            {
                title: title,
                completed: completed
            }
        ).then((response) => getTodos())
         .catch((error) => {
            console.log(error)
            alert(error.response.data.message)
        })
    }

    const deleteTodo = async (id) => {
        api.delete(`/todo/${id}`)
            .then((response) => getTodos())
            .catch((error) => console.log(error))
    }

    const handleKeyPress = (e) => {
        const title = e.target.textContent;
        if (e.key === 'Enter') {
            e.preventDefault();
            if (title.trim() === ''){
                alert('El titulo de la tarea no puede estar vacío')
                return;
            }
            setTitle(e.target.textContent);
            updateTodo(id, completed, e.target.textContent);
        }
    }
    
    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2 bg-dark text-white"
        >
            <div className="d-flex align-items-center">
                <input
                    className="form-check-input me-2" 
                    type="checkbox" 
                    value=""
                    aria-label="..." 
                    checked={completed}
                    onChange={(e) => updateTodo(id, e.target.checked, title)}
                />
                {
                    completed 
                    ? <s>{stitle}</s> 
                    : <div 
                        contentEditable="true"
                        suppressContentEditableWarning
                        onKeyPress={(e) => {handleKeyPress(e)}}
                    >{stitle}</div>}
            </div>
            <a href="#" data-mdb-tooltip-init title="Remove item" onClick={() => deleteTodo(id)}>
                <i className="bi bi-x" style={{fontSize: '30px'}}></i>
            </a>
        </li>
    )
}

export default TodoItem;