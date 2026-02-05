# Project Specifications – Simple Responsive Navbar-02 | Hover Effects

## 1. Project Title
**CodA-Nova – Responsive Navigation Menu with Hover**
---

## 2. Context / Overview
This project aims to create a simple, horizontal, readable, and professional navigation menu for a website.  
**It will serve as a foundation to learn how to structure a navbar and apply modern styles using Flexbox.**
---

## 3. Objectives
- Understand the HTML structure of a menu.
- Create a simple and functional horizontal menu.
- Learn how to use Flexbox to align elements.
- Introduce accessibility best practices.
---

## 4. Features to Implement
- Horizontal navbar with a logo and 5 links: Logo, Home, About, Portfolio, Contact, Blog.
- Make the menu responsive for mobile, tablet, and desktop.
- Use clean HTML/CSS code with proper comments.
- Hover effects on logo and menu links with smooth transition (`0.3s ease` for color and background-color).
- Sticky navbar at the top of the page when scrolling.
> Note: Some navigation links use `#` as placeholders. These links will be replaced by real routes or interactive behaviors as the project evolves.
---

## 5. Technical & Design Constraints
- **Responsive design:** The navbar must remain readable on all screen sizes. 
- Mobile (<768px): vertical menu, stacked logo above links
- Tablet (768px-991px): horizontal menu, same row as logo
- Desktop (≥992px): horizontal menu with larger spacing
- Accessibility: use `aria-label="Main navigation"` on <nav> for screen readers
- **Colors & style:**  
  - Background: `#333`  
  - Links: `#fff`  
  - Hover: text `#00bfff`, background `#555`  
  - Font: sans-serif, size 16px  
- Clean and well-commented HTML structure to facilitate future integration.
---

## 6. Technologies & Techniques to Learn
- **HTML:** `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>`  
- **CSS:**  
  - `display: flex; justify-content: space-between; align-items: center;`  
  - `padding`, `margin`, `background-color`  
  - `:hover` :hover for visual effects with smooth transition (0.3s ease)
  - `position: sticky; top: 0;`  
- **Best practices:** clean code, comments, HTML/CSS validation
---

## 7. Practical Exercises / Deliverables
- Create the horizontal navbar.  
- Final version tested on PC and mobile.  
- Include static prototypes in `assets/prototypes/` for mobile and desktop.
---

## 8. Project structure
CodA-Nova/Navbar 02
├── index.html
├── assets/css/style.css
└── assets/prototypes/
    ├── Mobile_Navbar.png
    └── Desktop_Navbar.png