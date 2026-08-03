# Backend - Todo List API

API REST desarrollada con **Node.js** y **Express** para administrar las tareas de la aplicación Todo List.

## 🚀 Tecnologías

* Node.js
* Express
* JavaScript

## 📦 Instalación

```bash
npm install
```

## ▶️ Ejecutar

Modo producción:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```
API

Ejemplo de endpoints:

Método	Endpoint	Descripción
GET	/todos	Obtener todas las tareas
POST	/todo	Crear una tarea
PUT	/todo/	Actualizar una tarea
DELETE	/todo/	Eliminar una tarea

## Variables de entorno

Si utilizas un archivo `.env`, crea uno con la configuración necesaria:

```env
APP_PORT=5000
```

## Respuesta de ejemplo

```json
[
  {
    "name": "creo mi todo",
    "id": 1785759681125
  }
]
```

## Notas

Este proyecto implementa una API REST que es consumida por el frontend desarrollado en React.
