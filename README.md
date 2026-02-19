El Sótano de Sam
Sistema de Gestión de Productos (CRUD)

Proyecto académico ADSO – Análisis y Desarrollo de Software.

1. Descripción

El Sótano de Sam es una aplicación web CRUD para la gestión de productos.

Permite:

Crear productos

Listar productos

Editar productos

Eliminar productos

La aplicación está desarrollada bajo una arquitectura cliente-servidor.

2. Arquitectura del Sistema

Frontend:
HTML, CSS y JavaScript

Backend:
Node.js con Express

Base de datos:
MongoDB (instancia local)

Control de versiones:
Git y GitHub

3. Estructura del Proyecto
sotano-sam-crud-node/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── database.js
│   └── index.js
│
├── index.html
├── app.js
├── styles.css
├── package.json
└── .gitignore

4. Instalación y Ejecución
Clonar repositorio
git clone https://github.com/engelevn/sotano-sam-crud-node.git

Instalar dependencias
cd backend
npm install

Ejecutar servidor
npm run dev


Servidor disponible en:

http://localhost:3000

Abrir el frontend

Abrir el archivo:

index.html

5. Endpoints de la API
Método	Endpoint
GET	/api/productos
GET	/api/productos/:id
POST	/api/productos
PUT	/api/productos/:id
DELETE	/api/productos/:id
6. Tecnologías Utilizadas

Node.js

Express

MongoDB

HTML

CSS

JavaScript

Git
