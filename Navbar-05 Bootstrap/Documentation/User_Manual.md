# User Manual – Navbar-05 | Responsive Bootstrap Navigation

## Introduction
CodA-Nova **Navbar-05** is a modern, fully responsive navigation bar built with **Bootstrap 5, HTML5, CSS3, and JavaScript**.  
It provides smooth navigation across desktop, tablet, and mobile devices.  
No configuration is required for end users; the navbar automatically adapts to different screen sizes.

---

## Features
- **Clickable Logo**: Click the logo to return to the home page.
- **Navigation Links**: Access pages like Home, About, Services (Dropdown), Portfolio, Contact.
- **Dropdown Menu**: The Services link reveals additional submenu options. 
- **Responsive Layout**: Adapts automatically to all screen sizes.
- **Mobile Menu Toggle**: Hamburger button opens/closes the menu on mobile devices.
- **CTA Button**: "Get Started" button on the right, aligned for desktop and mobile.
- **Desktop Hover Effects**: Links highlight with subtle background on hover (disabled on touch devices).
- **Active Link Highlight**: Uses `.active` class to indicate the current page.
- **Accessible**: ARIA attributes included for screen readers and touch devices.

> ℹ️ Note: Some navigation links are placeholders (`#`) and may not lead to real pages yet.

---

## Usage Instructions

### Desktop & Tablet:
- Open the website in a browser.
- Hover over menu links to see interactive hover effects.
- Click "Services" to reveal dropdown submenu.
- Click other links or the CTA button to navigate.

### Mobile:
- Tap the hamburger icon to open the menu.
- Tap again to close it.
- Tap "Services" to expand/collapse the dropdown submenu (desktop opens on hover, mobile opens on tap).
- Tap the "Get Started" button to access the CTA action.

---

## Responsive Behavior
| Device   | Screen Width    | Behavior                                                                              |
| -------- | --------------- | --------------------------------------------------------------------------------------|
| Mobile   | < 992px         | Collapsed menu with hamburger button; dropdown opens on tap; hover effects disabled   |
| Tablet   | 768px – 991px   | Horizontal menu; dropdown accessible via click                                        |
| Desktop  | ≥ 992px         | Horizontal menu; dropdown opens on hover; CTA button aligned to the right             |

> Layout adjusts automatically without manual user configuration.

---

## Installation
No installation is required for end users:
- Open `index.html` in a web browser.
- The navbar works immediately.
- Ensure `assets/css/style.css` and `assets/js/script.js` are correctly linked.

---

## Customization
Developers may:
- Modify navigation links in `index.html`.
- Change the logo text or replace with an image.
- Update styles in `assets/css/style.css` (colors, hover, spacing).
- Adjust mobile toggle or dropdown behavior in `assets/js/script.js`.
- Add or remove links or dropdown items as needed.

---

## Accessibility Considerations
- `aria-label` on `<nav>` defines the main navigation for screen readers.
- Hamburger toggle uses `aria-label="Toggle navigation"`.
- Dropdown toggle uses `aria-expanded` to indicate open/closed state.
- Larger clickable areas for touch devices.
- Hover effects are disabled on non-hover (touch) devices.
- Semantic HTML structure supports screen readers.

---

## Browser Compatibility
Tested and optimized for modern browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Works seamlessly on desktop, tablet, and mobile devices.