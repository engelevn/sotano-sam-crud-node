El Sótano de Sam
Sistema de Gestión de Productos (CRUD)

Proyecto académico ADSO – Análisis y Desarrollo de Software.

Descripción

Aplicación web CRUD para gestionar productos.

Permite:

Crear productos

Listar productos

Editar productos

Eliminar productos

Arquitectura cliente-servidor:

Frontend: HTML, CSS, JavaScript
Backend: Node.js + Express
Base de datos: MongoDB (local)
Control de versiones: Git y GitHub

Estructura del Proyecto
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

Instalación

Clonar repositorio:

git clone https://github.com/engelevn/sotano-sam-crud-node.git


Entrar al backend:

cd backend
npm install


Ejecutar servidor:

npm run dev


Servidor en:

http://localhost:3000


Abrir frontend:

index.html

Endpoints

GET /api/productos
GET /api/productos/:id
POST /api/productos
PUT /api/productos/:id
DELETE /api/productos/:id

Tecnologías

Node.js
Express
MongoDB
HTML
CSS
JavaScript
Git
