const lista = document.getElementById('lista-productos');
const form = document.getElementById('formProducto');

let editandoId = null;

// ===============================
// CARGAR PRODUCTOS
// ===============================
async function cargarProductos() {
  try {
    const res = await fetch('http://localhost:3000/api/productos');
    const data = await res.json();

    lista.innerHTML = '';

    data.forEach(prod => {
      const div = document.createElement('div');
      div.classList.add('producto-item');

      div.innerHTML = `
        <div class="producto-nombre">
          ${prod.nombre} - $${prod.precio}
        </div>
        <div class="botones">
          <button class="btn-editar">Editar</button>
          <button class="btn-eliminar">Eliminar</button>
        </div>
      `;

      // Eventos profesionales (sin onclick inline)
      div.querySelector('.btn-editar').addEventListener('click', () => {
        editarProducto(prod._id, prod.nombre, prod.precio);
      });

      div.querySelector('.btn-eliminar').addEventListener('click', () => {
        eliminarProducto(prod._id);
      });

      lista.appendChild(div);
    });

  } catch (error) {
    console.error('Error cargando productos:', error);
  }
}

// ===============================
// GUARDAR / ACTUALIZAR
// ===============================
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;

  try {
    if (editandoId) {
      await fetch(`http://localhost:3000/api/productos/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, precio })
      });
      editandoId = null;
    } else {
      await fetch('http://localhost:3000/api/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, precio })
      });
    }

    form.reset();
    cargarProductos();

  } catch (error) {
    console.error('Error guardando producto:', error);
  }
});

// ===============================
// EDITAR
// ===============================
function editarProducto(id, nombre, precio) {
  document.getElementById('nombre').value = nombre;
  document.getElementById('precio').value = precio;
  editandoId = id;
}

// ===============================
// ELIMINAR
// ===============================
async function eliminarProducto(id) {
  try {
    await fetch(`http://localhost:3000/api/productos/${id}`, {
      method: 'DELETE'
    });

    cargarProductos();

  } catch (error) {
    console.error('Error eliminando producto:', error);
  }
}

// ===============================
// INICIALIZAR
// ===============================
cargarProductos();
