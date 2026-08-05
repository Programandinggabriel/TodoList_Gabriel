import { useState } from "react";
import { api } from "../services/axios";

function FormTodo({ getTodos }){
    const [ formData, setFormData] = useState({todoTitle: ''});

    const setTodoTile = (title) =>  {
        setFormData({todoTitle: title})
    }

    const sendTodo = (form) => {
        api.post('/todo', {
            title: form.todoTitle
        })
        .then((response) => getTodos())
        .catch((error) => console.log(error))
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}className="d-flex justify-content-center align-items-center mb-4">
            <div data-mdb-input-init className="form-outline flex-fill">
                <input 
                    type="text" 
                    id="form3" 
                    className="form-control form-control-lg" 
                    onChange={(e) => setTodoTile(e.target.value)}
                />
                <label className="form-label" htmlFor="form3">¿Que necesitas para hoy?</label>
            </div>
            <button 
                type="button" 
                data-mdb-button-init data-mdb-ripple-init 
                className="btn btn-primary btn-lg ms-2"
                onClick={() => sendTodo(formData)}
            >Agregar</button>
        </form>
    )
}

export default FormTodo;