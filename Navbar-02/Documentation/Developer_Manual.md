# Developer Manual – CodA-Nova Navbar Menu-2

## 1. Project Overview
CodA-Nova is a clean and responsive navigation bar built using **HTML5** and **CSS3**.  
This template is part of the **CodA-Nova UI Series** and is designed to be lightweight, responsive, and easy to customize.

**Technologies used:** HTML5, CSS3 (Flexbox, Media Queries)  
**Planned features:** JavaScript interactivity, Bootstrap integration, PHP backend support

---

## 2. File Structure

CodA-Nova/Navbar-02
│
├── index.html                    # Main HTML file with navbar
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css              # CSS file for design and layout
│   └── prototypes/ screenshots of mobile and desktop layouts for reference
│       ├── Mobile.png
│       └── Navbar_Desktop.png
└── Documentation/
    ├── Project_Specifications.md
    ├── User_Manual.md
    ├── Developer_Manual.md

---

## 3. HTML Structure

```html
<header>
  <nav>
    <a href="index.html" class="logo">Cod'A-Nova</a>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </nav>
</header>
```
> Note: Some links use `#` as placeholders and are intended to be replaced, by real routes or dynamic behavior in future versions.
--- 

## 4. Structure Diagram

```
<nav aria-label="Main navigation">
├── <a class="logo">Logo</a>
└── <ul>
    ├── <li><a>Home</a></li>
    ├── <li><a>About</a></li>
    ├── <li><a>Portfolio</a></li>
    ├── <li><a>Contact</a></li>
    └── <li><a>Blog</a></li>
    </ul>
</nav>  ```
---

## 5. CSS Overview

```
CSS

/* Navbar */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 20px 40px;
}

nav .logo,
nav ul li a {
  color: #fff;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

/* Hover */
nav .logo:hover,
nav ul li a:hover {
  color: #00bfff;
  background-color: #555;
}
```

## 6. Adding a New Menu Item
- Open index.html.
- Add a new <li><a href="...">New Link</a></li> inside <ul>.
- Save the file.
- Update style.css if needed (colors, spacing, hover).

## 7. Customization
- Change logo text or image in <a class="logo">.
- Update menu links in <ul>.
- Modify colors, fonts, and spacing in style.css.

## 8. Notes for Developers
- Mobile-first responsive design.
- Hover effects only work on desktop.
- No JavaScript is needed for basic functionality.
- Code is commented line by line
- Can evolve with JS, Bootstrap, or PHP backend later

## Why No JavaScript?
This version intentionally avoids JavaScript to help developers
focus on HTML structure, CSS layout, and responsive design principles.
JavaScript will be introduced in later phases of the CodA-Nova roadmap.
