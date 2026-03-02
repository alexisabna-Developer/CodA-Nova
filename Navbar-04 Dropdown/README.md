# CodA-Nova – Navbar-04 | Responsive Dropdown Navigation

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)
![Flexbox](https://img.shields.io/badge/Flexbox-Layout-blueviolet)
![Accessibility](https://img.shields.io/badge/Accessibility-ARIA--Ready-0A7C86)
![No Framework](https://img.shields.io/badge/No-Framework-lightgrey)
![Dropdown](https://img.shields.io/badge/Dropdown-Yes-blue)

---

## Overview
**CodA-Nova Navbar-04** is a clean, modern, and fully responsive navigation bar built with **HTML5, CSS3, and vanilla JavaScript**.  
It provides clear and efficient navigation across mobile, tablet, and desktop devices, following modern UX, accessibility, and responsive design best practices.

---

## Features
- Fully responsive navigation bar (mobile, tablet, desktop)
- Sticky header that remains visible while scrolling
- Collapsible mobile menu (hamburger toggle adds/removes `.active` class)
- Dropdown menu accessible via hover (desktop) and click (mobile)
- Clean semantic HTML5 with `<nav>` and `<ul>` structure
- Flexbox layout with responsive spacing
- Smooth hover transitions (desktop only)
- Basic accessibility support (ARIA labels for nav and buttons)
- Minimal JavaScript keeps the component lightweight and easy to extend
- Well-commented code for maintainability and easy customization

---

## Technologies
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Dropdown menu**
- Flexbox & Media Queries
- Mobile-first responsive design
- Git & GitHub

---

## Project Structure
CodA-Nova/
└── Navbar-04
├── index.html                     # Main HTML file
├── README.md                      # Project overview and usage instructions
├── assets/
│ ├── css/
│ │ └── style.css                  # Main stylesheet
│ └── js/
│ └── script.js                    # JavaScript for mobile toggle
└── Documentation/
    ├── Project_Specifications.md
    ├── User_Manual.md
    ├── Developer_Manual.md
    └── Prototypes/
        ├── Mobile_Navbar.png
        └── Desktop_Navbar.png

---

## **Usage / Demo**
- Live demo available on [GitHub Pages](https://alexisabna-developer.github.io/CodA-Nova/Navbar-04/)
---

## Responsive Behavior

| Device   | Screen Width    | Behavior                                                                            |
| -------- | --------------- | ------------------------------------------------------------------------------------|
| Mobile   | < 767px         | Logo visible; menu hidden; toggle button opens/closes menu; dropdown opens on click |
| Tablet   | 768px – 991px   | Horizontal layout; fully visible menu                                               |
| Desktop  | ≥ 992px         | Horizontal layout with hover effects; dropdown opens on hover                       |

---

## Screenshots / Prototypes

### Mobile View
![Mobile Menu](Documentation/Prototypes/Mobile - Navbar.jpg)

### Desktop View
![Desktop Menu](Documentation/Prototypes/Desktop - Navbar.jpg)

---

## Installation & Usage
1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Ensure CSS and JS files are linked properly:

```html
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/script.js"></script>
```
4. Customize navigation links in index.html.
5. Resize your browser or open on mobile/tablet to test responsiveness.

---

## Accessibility Considerations
- `aria-label` on `<nav>` defines main navigation for screen readers
- Hamburger toggle button uses `aria-label="Open menu"` for accessibility
- Dropdown toggle uses `aria-expanded` to indicate open/closed state
- Larger clickable areas for touch devices
- Hover effects disabled on non-hover devices
- Semantic HTML structure supports screen readers

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.