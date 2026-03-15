# Project Specifications – Navbar-05 | Bootstrap Navigation

---

## 1. Project Title
**CodA-Nova – Responsive Navigation Bar with Bootstrap 5**

---

## 2. Project Description

Navbar-05 is part of the **CodA-Nova UI Components project**, a growing library of modern, reusable, and responsive interface components built for modern web development.


---

## 3. Context / Overview

This project consists of developing a **fully responsive navigation bar** using **Bootstrap 5**.  

The navbar must provide a clean, modern, and professional interface, working smoothly on mobile, tablet, and desktop devices. The design must be consistent with CodA-Nova branding colors and UX standards.

---

## 4. Objectives

- Deliver clear and structured navigation.
- Ensure full responsiveness across all screen sizes.
- Use Bootstrap’s built-in **navbar, collapse, and dropdown components**.
- Maintain a clean, professional visual style.
- Ensure **good usability and accessibility**, including tactile feedback for mobile users.

---

## 5. Features to Implement

- **Clickable logo** linking to the home page (`index.html`).
- **Navigation links**:
  - Home (active)
  - About
  - Services (Dropdown with: Design, Development, Marketing)
  - Portfolio
  - Contact
- **CTA button**: “Get Started” aligned on the right of links on desktop.
- **Responsive collapse menu** on mobile with a hamburger button.
- **Dropdown menu** using Bootstrap’s built-in dropdown system.
- Horizontal menu on desktop (`navbar-expand-lg`).

> All links are placeholders (`#`) and can be replaced with real pages in future iterations.

---

## 6. Interaction Behavior

- Mobile menu **opens and closes** using Bootstrap’s collapse component.
- Dropdown menu **works automatically** with Bootstrap’s JavaScript.
- **Hover effects** are applied on desktop only:
  - Links highlight with a semi-transparent background on hover.
- **Active link** (“Home”) and **dropdown toggle open** (“Services”) text turn **gold (#FFD700)**.
- **Mobile tactile feedback**:
  - Tap on links or dropdown toggles highlights background slightly to provide user feedback.

---

## 7. Responsive Requirements

| Device  | Breakpoint       | Behavior                                                                       |
|---------|------------------|--------------------------------------------------------------------------------|
| Mobile  | < lg (992px)     | Collapsed navbar with hamburger button; hover disabled; tap highlights applied |
| Desktop | ≥ lg (992px)     | Expanded horizontal navbar with dropdown hover effects; CTA aligned right      |

---

## 8. Technical & Design Constraints

- **Framework:** Bootstrap 5.x via CDN (HTML + CSS + JS).
- **Responsive design:** Use `navbar-expand-lg` for desktop horizontal layout and collapse on mobile.
- **Layout:** Use Bootstrap Flexbox utilities for alignment (`mx-auto`, `ms-lg-3` for CTA).
- **Colors & style:**
  - Navbar background: `#0C1446`
  - Link text: `#ffffff`
  - Active link & open dropdown: `#FFD700`
  - CTA button background: `#0d6efd` (hover: `#0b5ed7`)
- **Typography:** Bootstrap default sans-serif font (~16px).
- **Dropdown menu:**
  - Background: `#0C1446`
  - Items text: `#ffffff`
  - Hover background: `rgba(13,110,253,0.15)` (desktop only)
  - Optional subtle shadow: `0 4px 8px rgba(0,0,0,0.15)`
- **Sticky navbar (optional for UX):** `position: sticky; top:0; z-index:1000`.
- **Code quality:** Clean, readable, well-organized, no modification of Bootstrap core files.

---

## 9. Deliverables

- Fully functional responsive navbar.
- Proper HTML structure with Bootstrap integration.
- Custom CSS file with hover, active link, dropdown, and CTA styling.
- README.md with usage instructions and overview.
- Project documentation including **user and developer guides**.
- UI prototypes showing both **mobile and desktop layouts**.