// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    loadCart();
    setupEventListeners();
});

// Función para obtener y mostrar los productos
async function fetchProducts() {
    try {
        const response = await fetch('js/data.json');
        if (!response.ok) {
            throw new Error('Error al cargar los productos');
        }
        const productos = await response.json();
        displayProducts(productos);
    } catch (error) {
        showError('No se pudieron cargar los productos. Por favor, intenta nuevamente más tarde.');
        console.error(error);
    }
}

// Función para mostrar los productos en el DOM
function displayProducts(productos) {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = '';

    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p><strong>Precio: $${producto.precio.toFixed(2)}</strong></p>
                <button data-id="${producto.id}">Agregar al Carrito</button>
            </div>
        `;
        productosContainer.insertAdjacentHTML('beforeend', productoHTML);
    });

    // Agregar eventos a los botones de agregar al carrito
    const botonesAgregar = document.querySelectorAll('.producto-card button');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}

// Función para mostrar mensajes de error usando SweetAlert2
function showError(message) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
    });
}

// Función para mostrar mensajes de éxito usando SweetAlert2
function showSuccess(message) {
    Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: message,
        timer: 2000,
        showConfirmButton: false
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(event) {
    const productoId = parseInt(event.target.getAttribute('data-id'));
    agregarProductoAlCarrito(productoId);
    showSuccess('Producto agregado al carrito');
}
