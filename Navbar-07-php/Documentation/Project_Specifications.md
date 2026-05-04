# Project Specifications – Navbar-07 | Dynamic PHP Navigation

---

## 1. Project Title
**CodA-Nova – Dynamic PHP Navbar**

---

## 2. Goal
Create a reusable and dynamic navigation bar using PHP.

---

## 3. Core Idea
The navbar is stored in one file (`navbar.php`) and reused in all pages using `require` to avoid code duplication.

---

## 4. Main Features
- File: `navbar.php`
- Include using `require`
- Clickable logo → homepage
- Navigation links:
  - Home
  - About
  - Services
  - Portfolio
  - Contact
- Active link highlight
- Responsive menu (mobile + desktop)
- Sticky navbar

---

## 5. Dynamic Behavior
- Detect current page using PHP
- Apply an `active` class to the correct link

---

## 6. Design (Colors & Style)
- Background: `#1e1e2f`
- Text: `#ffffff`
- Active link: `#ff6600`
- Hover: accent color
- Style: clean and modern
- Optional: shadow for sticky effect

---

## 7. Responsive
- < 992px → mobile menu (toggle)
- ≥ 992px → horizontal menu

---

## 8. Tech Stack
- PHP (WAMP)
- HTML + CSS + JavaScript

---

## 9. Deliverables
- `navbar.php`
- Example pages (`index.php`, `about.php`, etc.)
- Responsive navbar