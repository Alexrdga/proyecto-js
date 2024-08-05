// Función para agregar un producto al inventario
function agregarProducto(inventario, producto, cantidad) {
    inventario[producto] = cantidad;
    console.log(`Producto agregado: ${producto} con cantidad ${cantidad}`);
}

// Función para actualizar la cantidad de un producto existente en el inventario
function actualizarProducto(inventario, producto, cantidad) {
    if (producto in inventario) {
        inventario[producto] = cantidad;
        console.log(`Producto actualizado: ${producto} con nueva cantidad ${cantidad}`);
    } else {
        console.log(`El producto ${producto} no existe en el inventario`);
    }
}

// Función para mostrar el inventario actual
function mostrarInventario(inventario) {
    console.log("Inventario actual:");
    for (let producto in inventario) {
        console.log(`${producto}: ${inventario[producto]}`);
    }
}

// Crear un inventario vacío
let inventario = {};

// Llamadas a las funciones
agregarProducto(inventario, "Manzanas", 50);
agregarProducto(inventario, "Naranjas", 30);
actualizarProducto(inventario, "Manzanas", 75);
actualizarProducto(inventario, "Peras", 20);
mostrarInventario(inventario);
