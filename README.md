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

## Cómo Ejecutar el Proyecto

1. **Clonar el Repositorio**: Clona este repositorio en tu máquina local.

    ```bash
    git clone https://github.com/tu-usuario/proyecto-ecommerce.git
    ```

2. **Navegar al Directorio del Proyecto**:

    ```bash
    cd proyecto-ecommerce
    ```

3. **Abrir `index.html` en el Navegador**: Puedes abrir el archivo directamente en tu navegador haciendo doble clic sobre él o usando un servidor local.

    - **Usando un Servidor Local (Opcional pero Recomendado)**:

        Si tienes instalado `Live Server` en Visual Studio Code u otro servidor local, úsalo para evitar problemas con `fetch()` debido a restricciones de CORS.

## Consideraciones

- **Sin Backend Real**: Este simulador utiliza un archivo `data.json` como base de datos simulada y no se conecta a ningún backend real.
- **No Maneja Registro de Usuarios**: La aplicación omite funcionalidades como registro y login para enfocarse en el flujo de compra.
- **Datos Pre-Cargados**: El formulario de datos personales está pre-completado con información de ejemplo para facilitar las pruebas.

## Librerías Externas

- **SweetAlert2**: Utilizado para mostrar mensajes interactivos y notificaciones.

## Contacto

Si tienes alguna pregunta o necesitas soporte, por favor contacta a [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com).
