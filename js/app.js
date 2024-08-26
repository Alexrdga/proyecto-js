// Obtener referencias a los elementos del DOM
const form = document.getElementById('producto-form');
const productoInput = document.getElementById('producto');
const cantidadInput = document.getElementById('cantidad');
const inventarioLista = document.getElementById('inventario-lista');

// Función para cargar el inventario desde localStorage
function cargarInventario() {
    let inventario = localStorage.getItem('inventario');
    return inventario ? JSON.parse(inventario) : {};
}

// Función para guardar el inventario en localStorage
function guardarInventario(inventario) {
    localStorage.setItem('inventario', JSON.stringify(inventario));
}

// Función para agregar o actualizar un producto en el inventario
function agregarOActualizarProducto(event) {
    event.preventDefault();

    let inventario = cargarInventario();
    const producto = productoInput.value.trim();
    const cantidad = parseInt(cantidadInput.value.trim());

    if (producto && !isNaN(cantidad)) {
        inventario[producto] = cantidad;
        guardarInventario(inventario);
        mostrarInventario();
        form.reset();
        console.log(`Producto agregado/actualizado: ${producto} con cantidad ${cantidad}`);
    }
}

// Función para mostrar el inventario actual en la lista HTML
function mostrarInventario() {
    let inventario = cargarInventario();
    inventarioLista.innerHTML = '';

    for (let producto in inventario) {
        let item = document.createElement('li');
        item.textContent = `${producto}: ${inventario[producto]}`;
        inventarioLista.appendChild(item);
    }
}

// Evento para manejar el formulario de agregar/actualizar producto
form.addEventListener('submit', agregarOActualizarProducto);

// Mostrar el inventario al cargar la página
mostrarInventario();