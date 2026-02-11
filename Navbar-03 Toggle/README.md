# CodA-Nova – Simple Responsive Navbar-03

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)
![Flexbox](https://img.shields.io/badge/Flexbox-Layout-blueviolet)
![Accessibility](https://img.shields.io/badge/Accessibility-ARIA--Ready-0A7C86)
![No Framework](https://img.shields.io/badge/No-Framework-lightgrey)

---

CodA-Nova is a clean, modern, and fully responsive navigation bar built with **HTML5, CSS3, and vanilla JavaScript**.
It is designed as a scalable UI component following modern UX, accessibility, and responsive design best practices.

This repository represents **Navbar-03** of the **CodA-Nova UI Navigation Series**.
Each menu template is crafted to be reusable, well-documented, and production-ready.

---

## ✨ Current Features
- Fully responsive navigation bar (mobile, tablet, desktop)
- Sticky header (remains visible while scrolling)
- Mobile toggle menu using **pure JavaScript**
- Desktop-only hover effects for better UX
- Hover effects on menu links and logo
- Clean and semantic HTML5 structure
- Modern CSS3 styling using Flexbox
- Responsive spacing with media queries
- Smooth hover transitions
- Basic accessibility support (ARIA labels)
- Cross-browser compatible
- Clean, commented, and maintainable code
- Reusable UI navigation component 
- Complete documentation in **Markdown**

---

## 🛠️ Technologies

### Currently Used
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- Flexbox
- Media Queries
- Mobile-first responsive design
- Git & GitHub
- Figma (UI/UX)

### Planned / Upcoming
- Dropdown menus
- Mega menu layout
- Optional Bootstrap version
- Backend-aware navigation (PHP)
- **Bootstrap** (optional UI components and layout utilities)
- **PHP** (server-side features and backend logic)

> Planned technologies will be introduced progressively as the project evolves.

---

## 📁 Project Structure
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


---

## 📱 Responsive Behavior
**Mobile (<768px)**
- Logo stacked on top 
- Menu hidden by default
- Toggle button opens and closes the menu

**Tablet (768px – 991px)**
- Horizontal layout
- Balanced spacing

**Desktop (≥992px)**
- Horizontal navigation
- Increased spacing between links
- Hover effects enabled (mouse devices only)

---

## UX Design Decisions
- Hover effects are applied only on devices that support hover
using **@media (hover: hover)** to avoid touch-device issues.
- Clickable areas are enlarged for accessibility.
- Visual hierarchy is maintained between logo and navigation links.
- Layout avoids hover conflicts on mobile and tablet devices.

---

## 📘 Documentation (Recommended Reading)

**Primary Documentation (Markdown - viewable directly on GitHub)**

- [Project Specifications](Documentation/Project_Specifications.md)
- [User Manuals](Documentation/User_Manual.md)
- [Developer Manuals](Documentation/Developer_Manual.md)

---

## 🎨 Prototype / Design
Each navigation template includes a Figma prototype to visualize layout and UI before development:
 
  
 ### Desktop Prototype
- [Desktop Prototype on Figma](https://www.figma.com/design/Md488nicaxcKZXrwNCnuyw/Cod-A-Nova-Menu?node-id=181-8&p=f&t=kKx4ikNyK3Xvirvc-0)  


 ### Mobile Prototype
- [Mobile Prototype on Figma](https://www.figma.com/design/Md488nicaxcKZXrwNCnuyw/Cod-A-Nova-Menu?node-id=181-25&t=kKx4ikNyK3Xvirvc-0)


---

## 🌐 Browser Compatibility
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

---

## 🚀 Installation & Usage
1. Clone or download the repository
2. Open 'index.html' in a web browser
3.Link the CSS and JavaScript files:

### Step 4: Link the CSS file in your HTML
```html
<!-- Link to CSS & JavaScript file -->
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/script.js"></script>

```
4. Customize navigation links in index.html
5. Adjust responsive behavior using media queries.
6. Open in a browser to see the responsive navbar in action.
7. Resize the browser or open on a mobile device to test responsive behavior.

---

## 🛣️ Roadmap
✅ Phase 1: Responsive navbar (HTML & CSS)
✅ Phase 2: Hover effects and UX improvements
✅ Phase 3: Mobile toggle menu (JavaScript)
🔜 Phase 4: Dropdown menu
🔜 Phase 5: Mega menu with JavaScript
🔜 Phase 6: Optional Bootstrap version
🔜 Phase 7: PHP-powered dynamic menu

---

## 🔮 Project Vision
CodA-Nova is an evolving collection of reusable navigation UI templates, developed step by step with modern frontend standards, clean architecture, and professional documentation—combining a learning-driven approach with production-ready, scalable navigation solutions.

---

## 👤 Credits  
- Fonts: System fonts (Arial, Helvetica, sans-serif)
- Design & Prototypes: Figma
- Project Series: CodA-Nova UI


## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.
