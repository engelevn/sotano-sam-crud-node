El Sótano de Sam
Sistema de Gestión de Productos (CRUD)

Proyecto académico ADSO – Análisis y Desarrollo de Software.

1. Descripción

El Sótano de Sam es una aplicación web CRUD desarrollada bajo arquitectura cliente-servidor para la gestión de productos.

Permite realizar las siguientes operaciones:

Crear productos

Listar productos

Editar productos

Eliminar productos

2. Tecnologías Utilizadas

Frontend:

HTML

CSS

JavaScript

Backend:

Node.js

Express

Base de datos:

MongoDB (instancia local)

Control de versiones:

Git

GitHub

3. Arquitectura del Sistema

La aplicación está estructurada en tres capas principales:

Capa de presentación (Frontend)

Capa lógica (Backend – Express)

Capa de datos (MongoDB)

El frontend consume los endpoints REST expuestos por el backend.

4. Estructura del Proyecto
sotano-sam-crud-node/
│
├── backend/
│   ├── controllers/
│   │   └── producto.controller.js
│   ├── models/
│   │   └── producto.model.js
│   ├── routes/
│   │   └── producto.routes.js
│   ├── database.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── index.html
├── app.js
├── styles.css
└── .gitignore

5. Instalación y Ejecución
Clonar el repositorio
git clone https://github.com/engelevn/sotano-sam-crud-node.git

Ingresar al backend
cd sotano-sam-crud-node/backend

Instalar dependencias
npm install

Ejecutar servidor
npm run dev


El servidor se ejecutará en:

http://localhost:3000

6. Uso del Frontend

Abrir el archivo:

index.html


Desde el navegador o usando Live Server.

7. Endpoints de la API
Método	Endpoint
GET	/api/productos
GET	/api/productos/:id
POST	/api/productos
PUT	/api/productos/:id
DELETE	/api/productos/:id
8. Versiones del Entorno

Node.js: v24.13.1

npm: 11.8.0

MongoDB: Local (127.0.0.1:27017)

Editor: Visual Studio Code

Git: 2.51.0

9. Autor

Proyecto desarrollado como evidencia académica para el programa ADSO – Análisis y Desarrollo de Software.
