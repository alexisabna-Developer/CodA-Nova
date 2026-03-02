# Developer Manual – Navbar-04 | Responsive Dropdown Navigation

## 1. Project Overview

**CodA-Nova Navbar - 04** is a lightweight, responsive navigation component built using **HTML5**, **CSS3**, and **Vanilla JavaScript**.

This menu is part of the **CodA-Nova UI Series**, designed to demonstrate clean frontend structure, responsive behavior, and scalable UI patterns suitable for both learning purposes and real-world projects.

**Core goals:**
- Clean and semantic HTML structure
- Mobile-first responsive design
- Minimal JavaScript for interaction
- Well-documented and easy-to-extend codebase

**Technologies used:**
- HTML5  
- CSS3 (Flexbox, Media Queries)  
- JavaScript (menu toggle)
- Dropdown Menu
- Mobile-first approach  
- Git & GitHub

---

## 2. File Structure

CodA-Nova/
└── Navbar-04/
│
├── index.html       # Main HTML file with navbar structure
├── README.md        # Project overview and usage instructions
│
├── assets/
│ ├── css/
│ │ └── style.css   # Layout, responsiveness, and UI styling
│ └── js/
│ └── script.js     # JavaScript logic for menu toggle
│
└── Documentation/
    ├── Project_Specifications.md
    ├── User_Manual.md
    ├── Developer_Manual.md
    └── Prototypes/
        ├── Mobile_Navbar.png
        └── Desktop_Navbar.png
---

## 3. HTML Structure Overview

The HTML follows a **semantic and minimal structure**.

### Main Components
- `<header>`: Sticky navigation container
- `<nav>`: Main navigation wrapper
- `.logo`: Clickable brand link
- `.menu-toggle`: Mobile hamburger button
- `.nav-menu`: Navigation links container

### Structure Diagram

``` 
<header>
└── <nav>
    ├── <a class="logo">CodA-Nova</a>
    ├── <button class="menu-toggle">☰</button>
    └── <ul class="nav-menu">
        ├── <li><a>Home</a></li>
        ├── <li><a>About</a></li>
        ├── <li class="dropdown">
        │   ├── <a class="dropdown-toggle">Services</a>
        │   └── <ul class="dropdown-menu">
        │       ├── <li><a>Web</a></li>
        │       ├── <li><a>Design</a></li>
        │       └── <li><a>Marketing</a></li>
        │   </ul>
        ├── <li><a>Portfolio</a></li>
        └── <li><a>Contact</a></li>
    </ul>
</nav>
</header>

 ```

## 4. CSS Architecture Overview
- CSS is organized top-down: reset → layout → responsiveness → interactions

### 4.1 Global Reset
- Removes default browser margin and padding
- Uses box-sizing: border-box for predictable layouts

### 4.2 Layout & Positioning
- Flexbox is used to align logo and menu
- position: sticky keeps the navbar visible on scroll
- Consistent spacing using padding and gap

### 4.3 Responsive Design
- Mobile-first approach
- Media queries handle:
 - Mobile layout (stacked elements)
 - Tablet layout (horizontal alignment)
 - Desktop layout (increased spacing)

### 4.4 Hover Interactions
- Hover effects are applied only on hover-capable devices
- Uses @media (hover: hover) to avoid mobile hover issues
- Improves UX consistency across devices
- Hover effects are intentionally disabled on touch devices to prevent ghost interactions.


## 5. JavaScript handles:
- Mobile menu toggle behavior
- Dynamic state management using class toggling
- Dropdown opens on hover (desktop) and click/tap (mobile)
- The .active class toggles the dropdown menu visibility on mobile

### Behavior
- Toggles the visibility of the navigation menu
- Uses classList.toggle() to dynamically add or remove the .active class


### Logical Flow
- Select the toggle button
- Select the navigation menu
- Toggle the .active class on click

### Purpose
- Keep JavaScript minimal
- Separate behavior from styling
- Allow easy extension (dropdowns, animations, accessibility)

## 6. Responsive Behavior Summary
| Device  | Screen Width    | Behavior                                              |
| ------- | --------------- | ----------------------------------------------------- |
| Mobile  | `< 767px`       | Logo + toggle button, vertical menu                   |
| Tablet  | `768px – 991px` | Horizontal menu                                       |
| Desktop | `≥ 992px`       | Horizontal menu with larger spacing and hover effects |


## 7. Customization Guide
- Edit the logo text inside .logo
- Add or remove menu items inside .nav-menu
- Modify colors, spacing, and typography in style.css



