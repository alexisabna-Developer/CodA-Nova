# Project Specifications – Navbar-03 | Mobile Toggle

## 1. Project Title
**CodA-Nova – Responsive Navigation Bar with Hover & Mobile Toggle**

---

## 2. Context / Overview
This project consists of building a simple, lightweight, and professional responsive navigation bar.  
It is designed as a learning component to understand how modern navbars work using HTML, CSS, and basic JavaScript.

The navbar adapts automatically to mobile, tablet, and desktop screens and follows modern UI and front-end best practices.

---

## Intended Users
This navigation bar is intended for:
- Front-end beginners learning responsive design
- Developers building UI components
- Projects requiring a lightweight navbar without heavy frameworks

---

## 3. Objectives
- Understand the HTML structure of a navigation bar.
- Build a responsive navbar using Flexbox.
- Implement hover effects for desktop users.
- Implement a mobile navigation toggle (hamburger menu).
- Keep the navbar visible while scrolling (sticky behavior).

---

## 4. Features to Implement
- Navigation bar containing:
  - A clickable logo.
  - Navigation links: Home, About, Portfolio, Contact, Blog.
- Horizontal layout on tablet and desktop screens.
- Mobile menu toggle button (hamburger icon) for small screens.
- Vertical menu layout on mobile devices.
- Hover effects on links and logo (desktop only).
- Sticky navbar that remains visible while scrolling.

> Some navigation links are placeholders and currently use "#" or index.html as temporary targets. 

> These links are intended to be replaced by real pages in future iterations.

---

## 5. Responsive Behavior Requirements
| Device | Screen Width    | Expected Behavior                                      |
| ------ | --------------- | ------------------------------------------------------ |
| Mobile | < 768px         | Logo + toggle button, vertical menu hidden by default  |
| Tablet | 768px – 991px   | Horizontal menu, always visible                        |
| Desktop| ≥ 992px         | Horizontal menu with hover effects and wider spacing   |

---

## 6. Technical & Design Constraints
- **Responsive design:** Must adapt automatically to screen size using CSS media queries.
- **Layout system:** Flexbox is used to align and distribute elements.
- **Colors & style (used values):**
  - Navbar background: `#051f20`
  - Hover text color: `#0B2B26`
  - Hover background: `#DAF1DE`
- **Typography:** Sans-serif font, readable size (≈16px).
- Clean, readable, and well-commented code.

> The listed colors reflect the actual values used in the CSS implementation.

---

## 7. Technologies & Techniques Used
- **HTML**
  - `<header>`, `<nav>`, `<ul>`, `<li>`, `<a>`
- **CSS**
  - `display: flex`
  - `justify-content: space-between`
  - `align-items: center`
  - `box-sizing: border-box`
  - `position: sticky; top: 0`
  - Media queries for responsive behavior
  - `:hover` pseudo-class for desktop interactions
- **JavaScript**
  - Menu toggle logic implemented in `assets/js/script.js`
  - Toggles the `.active` class on `.nav-menu` to control mobile menu visibility


---

## 8. Deliverables
- A fully functional responsive navbar (HTML, CSS, JavaScript).
- A complete README.md with usage instructions and project overview.
- Project documentation including:
  - Project specifications
  - User manual
  - Developer manual
- UI prototypes illustrating mobile and desktop layouts.

---

## 9. Project structure

CodA-Nova/                         # Main project directory
└── Navbar-03/                     # Third navigation bar component in the CodA-Nova series
    ├── index.html                 # Main HTML file containing the navbar structure
    ├── README.md                  # Project overview, usage instructions, and setup guide
    │
    ├── assets/                    # Static files used by the project
    │   ├── css/
    │   │   └── style.css          # Main stylesheet (layout, responsiveness, hover effects)
    │   └── js/
    │       └── script.js          # JavaScript file handling the mobile toggle functionality
    │
    └── Documentation/             # Project documentation folder
        ├── Project_Specifications.md  # Detailed project requirements and technical specifications
        ├── User_Manual.md             # Instructions for end users
        ├── Developer_Manual.md        # Technical explanation for developers
        └── Prototypes/                # UI mockups and visual references
            ├── Mobile_Navbar.png      # Mobile layout preview
            └── Desktop_Navbar.png     # Desktop layout preview

    