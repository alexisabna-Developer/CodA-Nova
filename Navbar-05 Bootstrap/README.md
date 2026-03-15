# CodA-Nova – Navbar-05 | Responsive Bootstrap Navigation

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)
![Flexbox](https://img.shields.io/badge/Flexbox-Layout-blueviolet)
![Accessibility](https://img.shields.io/badge/Accessibility-ARIA--Ready-0A7C86)
![Dropdown](https://img.shields.io/badge/Dropdown-Yes-blue)
![CTA](https://img.shields.io/badge/CTA-Get%20Started-blueviolet)


---

## Overview
**CodA-Nova Navbar-05** is a modern, fully responsive navigation bar built with **Bootstrap 5, HTML5, CSS3, and JavaScript**.  
It includes a clickable logo, navigation links, a dropdown menu, and a right-aligned CTA button.  
The JavaScript handles **mobile menu toggle**, **dropdown interactions**, and **active link highlighting** for a smooth UX on all devices.

---

## Features
- Fully responsive navigation bar (mobile, tablet, desktop)
- Collapsible mobile menu using **Bootstrap JS**
- Dropdown menu for “Services” accessible via hover (desktop) and click (mobile)
- Right-aligned CTA button “Get Started”
- Desktop hover effects for links; mobile hover disabled, tactile feedback enabled
- Active link and open dropdown toggle visual feedback
- Semantic HTML5 with `<nav>` and `<ul>` structure
- Flexbox layout for spacing and alignment
- Minimal JS for mobile toggle and dropdown behavior
- Accessibility-ready with ARIA labels and proper roles
- Well-commented and maintainable code

---

## Technologies
- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript (Vanilla)** for interactivity
- Flexbox & Media Queries
- Mobile-first responsive design
- Git & GitHub

---

## Project Structure
CodA-Nova/
└── Navbar-05/
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

## Usage / Demo
1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Ensure CSS and JS files are linked properly:

```html
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">

<!-- JS -->
<script src="assets/js/script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

```
4. Customize navigation links or CTA button in index.html.
5. Resize your browser or open on mobile/tablet to test responsiveness.

> 💡 Note: Bootstrap JS CDN is required for dropdown functionality and Internet connection required for Bootstrap CDN.


---

## Responsive Behavior
| Device   | Screen Width    | Behavior                                                                             |
| -------- | --------------- | -------------------------------------------------------------------------------------|
| Mobile   | < 992px         | Collapsed menu with hamburger button; dropdown opens on tap; hover effects disabled  |
| Tablet   | 768px – 991px   | Horizontal layout; dropdown accessible via click                                     |
| Desktop  | ≥ 992px         | Horizontal layout; dropdown opens on hover; CTA button aligned to the right          |

> ⚠️ On mobile, hover effects are disabled. Links still have a tactile feedback effect when tapped.

---

## Accessibility Considerations
- `aria-label` on `<nav>` defines main navigation for screen readers
- Hamburger toggle uses `aria-label="Toggle navigation"`
- Dropdown toggle uses `aria-expanded` to indicate open/closed state
- Larger clickable areas for touch devices
- Hover effects disabled on non-hover devices
- Semantic HTML structure supports screen readers

> 🔹 Color contrast: Navbar background (#0C1446) and link text (#ffffff) meet basic accessibility standards.

---

## Customization Notes
- Navbar background: `#0C1446`
- Links color: `#ffffff`
- Active link & dropdown toggle open color: `#FFD700`
- CTA button: `.btn-primary { background-color: #0d6efd; }`
- Hover effects: `.nav-link:hover { background-color: rgba(13,110,253,0.15); }` (desktop only)
- Mobile tactile feedback: `.nav-link:active { background-color: rgba(13,110,253,0.15); }`

> 🔹 Accessibility note: The color contrast between navbar background (#0C1446) and link text (#ffffff) meets basic accessibility standards.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


