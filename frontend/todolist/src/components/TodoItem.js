import { api } from "../services/axios"

function TodoItem(
    {
        id, 
        title, 
        completed,
        getTodos
    }){
    //const [isCompleted, setCompleted] = useState(completed)

    /*const handleChanged = (e, id) => {
        setCompleted(e.target.checked)
    }*/

    const updateTodo = async(id, completed, title) => {
        console.log(id, completed, title)
        api.put(`/todo/${id}`, 
            {
                title: title,
                completed: completed
            }
        ).then((response) => getTodos())
         .catch((error) => console.log(error))
    }

    const deleteTodo = async (id) => {
        api.delete(`/todo/${id}`)
            .then((response) => getTodos())
            .catch((error) => console.log(error))
    }
    
    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            <div className="d-flex align-items-center">
                <input 
                    className="form-check-input me-2" 
                    type="checkbox" 
                    value="" 
                    aria-label="..." 
                    checked={completed}
                    onChange={(e) => updateTodo(id, e.target.checked, title)}
                />
                {completed ? <s>{title}</s> : title}
            </div>
            <a data-mdb-tooltip-init title="Remove item" onClick={() => deleteTodo(id)}>
                <i class="bi bi-x" style={{fontSize: '30px'}}></i>
            </a>
        </li>
    )
}

export default TodoItem;