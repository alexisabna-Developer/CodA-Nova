// Navbar-05 | Minimal JS for Mobile Toggle
// Purpose: Handle mobile menu open/close in a lightweight way

// 1. Select the hamburger toggle button
const menuToggle = document.querySelector('.navbar-toggler');

// 2. Select the collapsible menu container
const navMenu = document.querySelector('#navbarNavDropdown');

// 3. Listen for click events on the hamburger button
menuToggle.addEventListener('click', function() {
    // 4. Toggle Bootstrap's "show" class to open/close the menu
    navMenu.classList.toggle('show');
});