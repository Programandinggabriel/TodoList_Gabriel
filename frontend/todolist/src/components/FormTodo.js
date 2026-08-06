import { useState } from "react";
import { api } from "../services/axios";

function FormTodo({ getTodos }){
    const [ formData, setFormData] = useState({todoTitle: ''});

    const setTodoTitle = (title) =>  {
        setFormData({todoTitle: title})
    }

    const sendTodo = (form) => {
        api.post('/todo', {
            title: form.todoTitle
        })
        .then((response) => {
            getTodos()
            setTodoTitle('')
        })
        .catch((error) => {
            console.log(error)
            alert(error.response.data.message)
        })
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="d-flex justify-content-center align-items-center mb-4">
            <div data-mdb-input-init className="form-outline flex-fill">
                <input 
                    type="text" 
                    value={formData.todoTitle}
                    id="form3"
                    className="form-control form-control-lg bg-dark text-white" 
                    onChange={(e) => setTodoTitle(e.target.value)}
                />
                <label className="form-label" htmlFor="form3">
                    Escribe tu tarea...
                </label>
            </div>
            <button 
                type="submit" 
                data-mdb-button-init data-mdb-ripple-init 
                className="btn btn-primary btn-lg ms-2"
                onClick={() => sendTodo(formData)}
            >
                <i class="bi bi-database-fill-check" style={{ fontSize: '2rem' }}></i>
            </button>
        </form>
    )
}

export default FormTodo;