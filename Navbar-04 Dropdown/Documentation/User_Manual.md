## User Manual – Navbar-04 | Responsive Dropdown Navigation

## Introduction
CodA-Nova **Navbar-04** is a lightweight, responsive navigation component designed for seamless navigation across devices.  
It adapts automatically to different screen sizes with no configuration required for end users.

---

## Intended Users
This navigation bar is intended for:
- Website visitors using desktop or mobile devices
- Beginners learning responsive navigation patterns
- Developers testing dropdown-based navigation layouts

---

## Features
- **Clickable Logo**: Click the logo to return to the home page.
- **Navigation Links**: Access pages like Home, About, Services (Dropdown), Portfolio, Contact.
- **Dropdown Menu**: The Services link reveals additional submenu options. 
- **Responsive Layout**: Automatically adapts to screen size.
- **Mobile Menu Toggle**: On mobile devices, the menu can be opened/closed via a hamburger button.
- **Desktop Hover Effects**: Interactive hover effects on mouse-enabled devices.
- **Sticky Header**: Remains visible while scrolling (sticky header).

> ℹ️ Note: Some navigation links are placeholders and may not open new pages yet.  
> This behavior is expected in the current version.

---

## Usage Instructions

### Desktop & Tablet:
- Open the website in a browser.
- Hover over menu links or the logo to see interactive hover effects.
- Click on links to navigate to the corresponding pages.

### Mobile:
- Tap the hamburger icon to open the menu.
- Tap again to close it.
- Tap "Services" to reveal the dropdown submenu.

---

## Responsive Behavior
| Device  | Screen Width    | Behavior                                                |
| ------- | --------------- | ------------------------------------------------------- |
| Mobile  | < 768px         | Logo + toggle button; vertical menu hidden by default   |
| Tablet  | 768px – 991px   | Horizontal menu, always visible                         |
| Desktop | ≥ 992px         | Horizontal menu with larger spacing and hover effects   |

> The layout adjusts automatically without manual configuration.

---

## Installation
No installation is required for users:
- Open `index.html` in a web browser.
- Navigate using the menu interface.
- The navigation component works immediately out of the box.

---

## Customization
Developers may:
- Modify navigation links inside `index.html`.
- Change the logo text or add an image inside `<a class="logo">`.
- Adjust styles in `assets/css/style.css`.
- Update toggle behavior in `assets/js/script.js`.

---

## Browser Compatibility
Fully compatible with modern browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Optimized for desktop and mobile environments.