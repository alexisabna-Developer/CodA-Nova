// Toggle menu principal mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Mega menu Services
const servicesLink = document.querySelector('.mega-menu > a');
const megaContent = document.querySelector('.mega-menu-content');

// Toggle sur clic (desktop et mobile)
servicesLink.addEventListener('click', (e) => {
    e.preventDefault(); // empêche le # ou le lien normal
    megaContent.classList.toggle('active');
});

// Fermer le mega menu si clic à l'extérieur
document.addEventListener('click', (e) => {
    // si le clic n'est pas sur Services ni sur le mega menu
    if (!servicesLink.contains(e.target) && !megaContent.contains(e.target)) {
        megaContent.classList.remove('active');
    }
});

// Optionnel : fermer le menu principal sur mobile quand on clique sur un lien
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            megaContent.classList.remove('active');
        }
    });
});