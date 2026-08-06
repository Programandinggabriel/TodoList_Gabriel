# 📝 Todo List

Aplicación de gestión de tareas desarrollada con una arquitectura separada en **Frontend** y **Backend**.

## 📁 Estructura del proyecto

```text
todo-list/
│
├── backend/          # API REST con Node.js y Express
├── frontend/         # Aplicación React
└── README.md
```

## 🚀 Tecnologías utilizadas

### Frontend

* React
* JavaScript
* CSS
* Fetch API / Axios

### Backend

* Node.js
* Express
* REST API

## 📋 Requisitos

* Node.js 18 o superior
* npm

## ⚙️ Instalación

Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd TodoList_Gabriel
```

### 1. Backend

```bash
cd backend
npm install
```

### 2. Frontend

```bash
cd ../frontend/todolist
npm install
```

## ▶️ Ejecutar el proyecto

### Iniciar el backend

```bash
npm run dev
```

Por defecto se ejecutará en:

```
http://localhost:5000
```

### Iniciar el frontend

En otra terminal:

```bash
cd frontend/todolist
npm start
```

Se abrirá en:

```
http://localhost:5173
```

*(o el puerto configurado por React/Vite).*

## 📡 Comunicación

El frontend consume la API del backend mediante peticiones HTTP.

Asegúrate de que el backend esté ejecutándose antes de iniciar el frontend.

## 📂 Documentación

Cada carpeta contiene su propia documentación:

* `back/README.md`
* `front/README.md`

## 👨‍💻 Autor

Proyecto desarrollado como aplicación de práctica de una Todo List.
