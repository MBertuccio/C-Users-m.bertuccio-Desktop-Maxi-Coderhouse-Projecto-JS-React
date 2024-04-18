// Datos simulados de los elementos del carrito de compras
const cartItems = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 }
];

// Función para mostrar los elementos del carrito de compras
function displayCartItems() {
    const cartList = document.querySelector('.cart-items');
    cartList.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    const cartTotal = document.querySelector('.cart-total');
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Función para manejar el evento de finalizar compra
function handleCheckout() {
    alert('¡Gracias por tu compra!');
    // Aquí podrías agregar lógica adicional, como vaciar el carrito, redirigir a la página de pago, etc.
}

// Mostrar los elementos del carrito al cargar la página
window.addEventListener('load', () => {
    displayCartItems();
});

// Agregar un evento al botón de finalizar compra
const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn.addEventListener('click', handleCheckout);

// Crear el ícono de carrito de compras como una imagen
const cartIcon = document.createElement('img');
cartIcon.src = 'Assets/Imagenes/carrito2.png'; // Ruta correcta de la imagen del carrito
cartIcon.alt = 'Carrito de Compras';

// Agregar el ícono al título del widget
const cartTitle = document.querySelector('.cart-widget h2');
cartTitle.prepend(cartIcon);
