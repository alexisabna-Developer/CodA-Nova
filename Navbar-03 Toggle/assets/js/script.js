// Selects the mobile menu toggle button (hamburger icon)
const menuToggle = document.querySelector('.menu-toggle');

// Selects the navigation menu container
const navMenu = document.querySelector('.nav-menu');

// Toggles the navigation menu visibility on button click
menuToggle.addEventListener('click', function() {

// Adds or removes the "active" class to control menu visibility
    navMenu.classList.toggle('active');
});