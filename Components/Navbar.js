// LLinks del MENu
const menuItems = [
    { title: 'Productos', link: '#' },
    { title: 'Tratamientos', link: '#' },
    { title: 'Herramientas', link: '#' }
];

// Función para crear y mostrar los elementos del menú
function createNavbar() {
    const navbar = document.querySelector('.navbar');

    // Crear el logo
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoImg = document.createElement('img');
    
    logo.appendChild(logoImg);

    // Crear el título
    const title = document.createElement('h1');
    title.textContent = 'Alma Donna';

    // Crear los botones del menú
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('navbar-buttons');

    menuItems.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.title;
        button.addEventListener('click', () => {
            // Manejar el evento del botón, por ejemplo, redirigir a la página correspondiente
            window.location.href = item.link;
        });
        buttonsContainer.appendChild(button);
    });

    // Agregar los elementos al navbar
    navbar.appendChild(logo);
    navbar.appendChild(title);
    navbar.appendChild(buttonsContainer);
}

// Mostrar el navbar al cargar la página
window.addEventListener('load', () => {
    createNavbar();
});
