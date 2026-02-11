## User Manual – CodA-Nova Navbar - 03 

## Introduction
CodA-Nova is a simple, lightweight, and responsive navigation bar that allows users to move seamlessly between different pages of the site.
It works automatically on mobile, tablet, and desktop screens. No configuration is needed for end users.

--- 

## Intended Users
This navigation bar is intended for:
- Website visitors using desktop, tablet, or mobile devices
- Beginners learning responsive web design
- Developers testing UI layouts with basic JavaScript

---

## Features
- **Clickable Logo**: Click the logo to return to the home page.
- **Navigation Links**: Access pages like Home, About, Portfolio, Contact, and Blog.
- **Responsive Design**: Automatically adapts to mobile, tablet, and desktop screens.
- **Mobile Menu Toggle**: On mobile devices, the menu can be opened/closed via a hamburger button.
- **Hover Effects**: Menu links and logo change color when hovered (desktop only).
- **Sticky Header**: The navbar uses CSS position: sticky to remain visible while scrolling.

> ⚠ Note: Hover effects are not available on mobile devices (touchscreens do not support hover).

> ℹ️ Note: Some navigation links are placeholders and may not open new pages yet.  
> This behavior is expected in the current version.

---

## How to Use

### Desktop & Tablet:
- Open the website in a browser.
- Hover over menu links or the logo to see color changes.
- Click on links to navigate to the corresponding pages.

### Mobile:
- Open the website in a browser.
- The menu is hidden by default under the hamburger toggle button.
- Click the hamburger button to open or close the navigation menu.
- Click on links to navigate to the desired pages.
- Hover effects are not available on mobile devices.

--- 

## Responsive Behavior
| Device  | Screen Width    | Behavior                                                |
| ------- | --------------- | ------------------------------------------------------- |
| Mobile  | < 768px         | Logo + toggle button, vertical menu (hidden by default) |
| Tablet  | 768px – 991px   | Horizontal menu, always visible                         |
| Desktop | ≥ 992px         | Horizontal menu with larger spacing and hover effects   |


> No manual adjustment is required; the navbar adapts automatically.

---

## Installation
- No installation is required for users:
 - Open `index.html` in a web browser.
 - Use the navigation bar to navigate between pages.
 - Everything is ready to use out-of-the-box
 
---

## Customization
- Update menu links by editing the HTML file (`index.html`).
- Change the logo text or add an image inside `<a class="logo">`.
- Modify colors, fonts, and spacing in `assets/css/style.css`.
- Advanced features like dropdowns, mega menus, or custom toggle behavior require JavaScript and can be added in future versions.

---

## Compatibility
Works on modern browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Fully usable on mobile, tablet, and desktop devices.