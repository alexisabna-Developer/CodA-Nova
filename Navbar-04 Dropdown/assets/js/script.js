// Select the hamburger button
const menuToggle = document.querySelector('.menu-toggle');

// Select the main navigation menu
const navMenu = document.querySelector('.nav-menu');

// Select the dropdown toggle link
const dropdownToggle = document.querySelector('.dropdown-toggle');

// Select the dropdown parent element
const dropdown = document.querySelector('.dropdown');


/* Mobile Menu Toggle */

// When the hamburger button is clicked
menuToggle.addEventListener('click', function () {

    // Add or remove the "active" class
    // This shows or hides the mobile menu
    navMenu.classList.toggle('active');

});


/* Dropdown Toggle (Click) */

// When the "Services" link is clicked
dropdownToggle.addEventListener('click', function (event) {

    // Prevent the page from jumping (because of href="#")
    event.preventDefault();

    // Add or remove the "active" class
    // This shows or hides the dropdown menu
    dropdown.classList.toggle('active');

});
