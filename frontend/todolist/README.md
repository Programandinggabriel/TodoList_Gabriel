📝 Todo List App

Una aplicación de lista de tareas desarrollada con React que permite gestionar tareas de forma sencilla mediante el consumo de una API REST utilizando Axios.

🚀 Características
✅ Agregar nuevas tareas.
📋 Listar todas las tareas.
✏️ Editar tareas existentes.
🗑️ Eliminar tareas.
✔️ Marcar tareas como completadas.
🔄 Consumo de API con Axios.
⚛️ Componentes reutilizables en React.
📱 Diseño responsive.
🛠️ Tecnologías utilizadas
React
Axios
JavaScript (ES6+)
HTML5
CSS3

📦 Instalación
Clona el repositorio.
git clone https://github.com/Programandinggabriel/TodoList_Gabriel.git

Entra al proyecto.
cd todolist

Instala las dependencias.
npm install

Ejecuta el proyecto.
npm run dev

🌐 Consumo de API

La aplicación utiliza Axios para realizar peticiones HTTP hacia una API REST.

Ejemplo de configuración:

import axios from "axios";

const api = axios.create({
  baseURL: "https://tu-api.com/api",
});

export default api;

Métodos utilizados
GET → Obtener tareas.
POST → Crear una tarea.
PUT → Actualizar una tarea.
DELETE → Eliminar una tarea.


📈 Mejoras futuras
Autenticación de usuarios.
Filtros por estado (Pendiente, Completada).
Buscador de tareas.
Modo oscuro.
Persistencia mediante almacenamiento local.
Paginación.