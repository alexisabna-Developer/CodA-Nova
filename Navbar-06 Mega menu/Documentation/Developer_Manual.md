# Developer Manual – Navbar-06 | Mega Menu Navigation

## 1. Project Overview

**CodA-Nova Navbar-06** is a modern, fully responsive navigation component with a **Mega Menu system**, built using **HTML5**, **CSS3**, and **Vanilla JavaScript**.

This menu is part of the **CodA-Nova UI Series**, designed to demonstrate structured navigation, responsive layout, and scalable UI patterns.

---


**Core goals:**
- Clean and semantic HTML structure  
- Responsive mega menu layout  
- Desktop hover + mobile click interaction  
- Lightweight JavaScript for interactivity  
- Easy to extend and maintain  

---

## Key Concept
The mega menu uses a hybrid interaction model:
- CSS handles desktop hover interaction
- JavaScript handles mobile click interaction
- Both systems are synchronized using the `.active` class
---

**Technologies used:**
- HTML5  
- CSS3 (Flexbox, Grid, Media Queries)  
- Vanilla JavaScript  
- Mobile-first approach  

---

## 2. File Structure

CodA-Nova/  
└── Navbar-06/  
├── index.html                     # Main HTML file with mega menu navbar  
├── README.md                      # Project overview and usage instructions  
├── assets/  
│   ├── css/  
│   │   └── style.css              # Layout, colors, responsiveness, mega menu styling  
│   └── js/  
│       └── script.js              # JavaScript for mobile toggle and mega menu behavior  
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
- `<nav class="navbar">`: Main navigation container  
- `.logo`: Clickable brand/logo link  
- `.menu-toggle`: Hamburger button for mobile  
- `.nav-menu`: Main navigation list  
- `.mega-menu`: Parent item for dropdown system  
- `.mega-menu-content`: Mega menu dropdown container  
- `.mega-menu-column`: Column inside mega menu  
- `<h3>`: Section titles inside dropdown  
- `<ul>`: Links grouped by category  

---

### 3.2 Structure Diagram
```html
<nav class="navbar">
  ├── <a class="logo">CodA-Nova</a>
  ├── <button class="menu-toggle">☰</button>
  └── <ul class="nav-menu">
      ├── Home
      ├── About
      ├── Services (Mega Menu)
      │   └── .mega-menu-content
      │       ├── Web Development
      │       │   ├── Frontend
      │       │   ├── Backend
      │       │   └── Full Stack
      │       └── Design
      │           ├── UI/UX
      │           ├── Graphic Design
      │           └── Branding
      ├── Portfolio
      └── Contact
   </ul>
   ```
---

## 4. CSS Architecture Overview

CSS is organized in layers: reset → layout → mega menu → responsive → interactions


### Layout
- Flexbox used for navbar alignment
- `.nav-menu` controls horizontal layout
- `.mega-menu-content` uses Flexbox for columns
- `position: absolute` for dropdown placement


### Mega Menu
- Multi-column layout using `.mega-menu-column`
- Minimum width ensures readability
- Background: #0C1446
- Text: white / light gray


### Responsive
- Mobile-first approach
- `<768px`: menu becomes vertical
- Mega menu switches to column layout
- JavaScript handles opening


### Interaction
- Desktop: hover
- Mobile: click (JS)

---

## 5. JavaScript Overview

### Handles
- Mobile menu toggle
- Mega menu open/close
- Click outside to close menu
- Close menu on link click (mobile)

### Behavior
- `.active` class controls visibility
- Click events trigger menu state
- Desktop relies on CSS hover

### Purpose
- Adds interactivity
- Keeps CSS simple
- Ensures mobile usability

---

## 6. Installation

No installation required:

- Open `index.html` in a browser
- Ensure `assets/css/style.css` is linked
- Ensure `assets/js/script.js` is linked

---

## 7. Customization

Developers can:

- Edit navigation links in `index.html`
- Add or remove mega menu columns in the HTML structure
- Customize colors and spacing in `assets/css/style.css`
- Modify menu behavior in `assets/js/script.js`
- Adjust responsive breakpoints in `style.css`

