# Developer Manual – Navbar-07 | Professional Blue UI Navigation

## 1. Project Overview

**CodA-Nova Navbar-07** is a modern, lightweight, and fully responsive navigation component built using **HTML5**, **CSS3**, and **Vanilla JavaScript**.

This navigation bar is part of the **CodA-Nova UI Series**, designed to demonstrate clean navigation, responsive layouts, and reusable front-end architecture following modern UI/UX best practices.

---

**Core goals:**
- Clean and semantic HTML structure
- Fully responsive navigation layout
- Professional blue UI design
- Desktop hover interactions
- Mobile hamburger menu functionality
- Lightweight JavaScript for interactivity
- Easy to extend and maintain

---

## Key Concept

The navigation bar uses a responsive interaction model:

- CSS manages the desktop layout and hover effects.
- JavaScript controls the mobile hamburger menu.
- Responsive behavior is handled using CSS Media Queries.
- The `.active` class is used to control the visibility of the mobile navigation menu.

---

**Technologies used:**
- HTML5
- CSS3 (Flexbox, Media Queries)
- Vanilla JavaScript
- Mobile-first approach

---

## 2. File Structure

```
CodA-Nova/
└── Navbar-07/
    ├── FrontEnd
    ├── index.html                     # Main HTML file with responsive navigation bar
    ├── README.md                      # Project overview and usage instructions
    ├── assets/
    │   ├── css/
    │   │   └── style.css              # Layout, colors, responsiveness, and UI styling
    │   └── js/
    │       └── script.js              # JavaScript for the mobile menu toggle
    └── Documentation/
        ├── Project_Specifications.md
        ├── User_Manual.md
        ├── Developer_Manual.md
        └── Prototypes/
            ├── Mobile_Navbar.png
            └── Desktop_Navbar.png
```

---

## 3. HTML Structure Overview

### 3.1 Main Components

### 3.1 Main Components

- `<nav class="navbar">`: Main navigation container
- `.logo`: Clickable CodA-Nova logo
- `.menu-toggle`: Hamburger button for mobile devices
- `.menu-item`: Main navigation list
- `.nav-link`: Individual navigation links
- `.login-btn`: Login button

---

### 3.2 Structure Diagram

```html
<nav class="navbar">
  ├── <a class="logo">CodA-Nova</a>
  ├── <button class="menu-toggle">☰</button>
  └── <ul class="menu-item">
      ├── Home
      ├── About
      ├── Services
      ├── Contact
      └── Login Button
   </ul>
</nav>
```

---

## 4. CSS Architecture Overview

CSS is organized in layers:

**reset → layout → components → responsive → interactions**

### Layout

- Flexbox is used for navigation alignment.
- `.navbar` distributes content horizontally.
- `.menu-item` manages the navigation links layout.
- `.login-btn` is styled as a call-to-action button.

### Components

- Professional blue color palette.
- Consistent spacing and typography.
- Rounded buttons and smooth transitions.
- Reusable component styling.


### Color Palette

| Element | Color |
|---------|--------|
| Navbar Background | `#1E3A8A` |
| Logo Text | `#FFFFFF` |
| Navigation Links | `#EFF6FF` |
| Navigation Hover | `rgba(147, 197, 253, 0.8)` |
| Active Link | `#93C5FD` |
| Active Link Border | `#60A5FA` |
| Login Button | `#2563EB` |
| Login Button Hover | `#1D4ED8` |
| Mobile Menu Background | `#1E40AF` |

The selected colors provide a professional appearance, strong readability, and a consistent user experience.


### Responsive

- Mobile-first approach.
- `<768px`: Navigation becomes vertical.
- Hamburger button replaces the horizontal navigation.
- `768px–991px`: Tablet layout adjustments.
- `≥992px`: Desktop horizontal navigation.

### Interaction

- Desktop: Hover effects on navigation links.
- Mobile: Hamburger button toggles menu visibility.
- CSS transitions provide smooth visual feedback.

---

## 5. JavaScript Overview

### Handles

- Mobile menu toggle.
- Open/close navigation menu.
- Toggle the `.active` class.
- Close the menu after selecting a navigation link (optional implementation).

### Behavior

- The `.active` class controls the visibility of the mobile navigation.
- Click events toggle the navigation state.
- Desktop interactions rely entirely on CSS.

### Purpose

- Adds lightweight interactivity.
- Improves mobile usability.
- Keeps HTML and CSS clean and maintainable.

---

## 6. Installation

No installation required:

- Open `index.html` in a web browser.
- Ensure `assets/css/style.css` is correctly linked.
- Ensure `assets/js/script.js` is correctly linked.
- JavaScript must be enabled for the mobile menu functionality.

---

## 7. Customization

Developers can:

- Edit navigation links in `index.html`.
- Update the logo or branding.
- Modify the Login button destination.
- Customize colors, typography, spacing, and layout in `assets/css/style.css`.
- Change the mobile menu behavior in `assets/js/script.js`.
- Adjust responsive breakpoints using CSS Media Queries.
- Extend the navigation with additional menu items or future dropdown components.