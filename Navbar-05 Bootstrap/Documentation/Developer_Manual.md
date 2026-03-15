# Developer Manual – Navbar-05 | Responsive Bootstrap Navigation

## 1. Project Overview

**CodA-Nova Navbar-05** is a modern, fully responsive navigation component built using **HTML5**, **CSS3**, **Bootstrap 5**, and **Vanilla JavaScript**.

This menu is part of the **CodA-Nova UI Series**, designed to demonstrate clean frontend structure, responsive behavior, and scalable UI patterns suitable for learning purposes and production projects.

**Core goals:**
- Clean and semantic HTML structure
- Mobile-first responsive design using `navbar-expand-lg`
- Minimal JavaScript for interaction
- Well-documented and easy-to-extend codebase

---

**Technologies used:**
- HTML5  
- CSS3 (Flexbox, Media Queries, Custom Hover Styles)  
- Bootstrap 5 (Navbar, Collapse, Dropdown)  
- Vanilla JavaScript (mobile menu toggle) 
- Mobile-first approach  

---

## 2. File Structure

CodA-Nova/  
└── Navbar-05/  
├── index.html                     # Main HTML file with Bootstrap navbar  
├── README.md                      # Project overview and usage instructions  
├── assets/  
│   ├── css/  
│   │   └── style.css              # Layout, responsiveness, colors, hover effects  
│   └── js/  
│       └── script.js              # JavaScript for mobile toggle and dropdown handling  
└── Documentation/  
    ├── Project_Specifications.md  
    ├── User_Manual.md  
    ├── Developer_Manual.md  
    └── Prototypes/  
        ├── Mobile_Navbar.png  
        └── Desktop_Navbar.png  

---

## 3. HTML Structure Overview

### 3.1 Main Components
- `<nav class="navbar navbar-expand-lg">`: Main navigation container
- `.navbar-brand`: Clickable brand/logo link
- `.navbar-toggler`: Mobile hamburger button
- `#navbarNavDropdown`: Collapse wrapper for links
- `.navbar-nav`: Container for navigation links
- `.nav-item`: Individual menu items
- `.nav-link`: Link elements
- `.dropdown`: Parent element for dropdown menu
- `.dropdown-toggle`: Dropdown toggle link
- `.dropdown-menu`: Dropdown submenu items
- `.btn-primary`: Call-to-action "Get Started" button

### 3.2 Structure Diagram
```html
<nav class="navbar navbar-expand-lg">
  └── .container-fluid
      ├── <a class="navbar-brand">CodA-Nova</a>
      ├── <button class="navbar-toggler">☰</button>
      └── #navbarNavDropdown.collapse.navbar-collapse
          ├── .navbar-nav.mx-auto
          │   ├── <li class="nav-item"><a class="nav-link">Home</a></li>
          │   ├── <li class="nav-item"><a class="nav-link">About</a></li>
          │   ├── <li class="nav-item dropdown">
          │   │   ├── <a class="nav-link dropdown-toggle">Services</a>
          │   │   └── <ul class="dropdown-menu">
          │   │       ├── <li><a class="dropdown-item">Design</a></li>
          │   │       ├── <li><a class="dropdown-item">Development</a></li>
          │   │       └── <li><a class="dropdown-item">Marketing</a></li>
          │   ├── <li class="nav-item"><a class="nav-link">Portfolio</a></li>
          │   └── <li class="nav-item"><a class="nav-link">Contact</a></li>
          └── <a class="btn btn-primary ms-lg-3">Get Started</a>
          ```

---

## 4. CSS Architecture Overview

CSS is organized top-down: **reset → layout → responsiveness → interactions**

### 4.1 Global Reset
- Uses default Bootstrap reset
- Ensures predictable layout with `box-sizing: border-box`

### 4.2 Layout & Positioning
- Flexbox aligns brand, links, and CTA button
- `.mx-auto` centers links horizontally
- `.ms-lg-3` adds spacing to CTA button on desktop
- Navbar background and text colors defined in `style.css`

### 4.3 Responsive Design
- Mobile-first approach
- `navbar-expand-lg` defines breakpoint at `≥992px`
- Media queries handle hover effects only on non-touch devices

### 4.4 Hover & Active Link Interactions
- Desktop hover effects: `.nav-link:hover` highlights links with subtle background (`rgba(13,110,253,0.15)`)
- Active link highlighting: `.nav-link.active` shows the current page
- Hover effects disabled on touch devices (`@media (max-width: 991px)`)
- Dropdown toggle remains white when open

---

## 5. JavaScript Overview

**Handles:**
- Mobile menu toggle via hamburger button
- Dropdown menu behavior (click on mobile, hover on desktop)
- `.show` class for dropdown visibility
- Minimal and lightweight

**Behavior:**
- Select toggle button and collapse menu
- Toggle `.show` and `.active` classes on click
- Keeps dropdown and menu fully functional across devices

**Purpose:**
- Separate behavior from CSS
- Keep code lightweight
- Easy to extend with new menu items or animations

---

## 6. Installation

Ensure Bootstrap and the project files are properly linked.

Example using CDN:
```
html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
```

Also include the project files:

```
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/script.js"></script>
```
---

## 7. Customization

Developers can easily modify the component by:

- Editing navigation links in `index.html`
- Updating styles in `style.css`
- Modifying behavior in `script.js`
