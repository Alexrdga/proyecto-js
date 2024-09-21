# Simulador de Ecommerce

## Descripción

Este proyecto es un simulador interactivo de Ecommerce desarrollado con JavaScript, HTML y CSS. Permite a los usuarios navegar por una lista de productos, agregarlos a un carrito de compras, gestionar el carrito y simular el proceso de compra.

## Estructura del Proyecto

- `index.html`: Documento principal HTML.
- `css/styles.css`: Estilos CSS para la aplicación.
- `js/`
  - `app.js`: Lógica principal para cargar y mostrar productos.
  - `cart.js`: Gestión del carrito de compras.
  - `data.json`: Base de datos simulada con los productos.
- `assets/images/`: Imágenes de los productos.

## Funcionalidades

- **Listado de Productos**: Muestra una lista de productos cargados desde un archivo JSON.
- **Agregar al Carrito**: Permite agregar productos al carrito de compras.
- **Carrito de Compras**: Muestra los productos agregados, su cantidad y el total.
- **Eliminar Productos**: Permite eliminar productos individualmente del carrito.
- **Vaciar Carrito**: Opción para vaciar completamente el carrito.
- **Realizar Compra**: Simula el proceso de compra completando un formulario con datos pre-cargados.
- **Persistencia**: Utiliza `localStorage` para mantener el estado del carrito incluso al recargar la página.
- **Interfaz Interactiva**: Utiliza `SweetAlert2` para notificaciones y confirmaciones.



