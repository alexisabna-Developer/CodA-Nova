# User Manual – CodA-Nova Navbar-02

## Introduction
This project contains a simple and responsive navigation bar that allows users to move easily between different pages of the site.  
It works on mobile, tablet, and desktop screens automatically. No configuration or setup is required.

---

## Intended Users
This navigation bar is intended for:
- Website visitors using desktop, tablet, or mobile devices
- Beginners learning responsive web design
- Developers testing UI layouts without JavaScript
---

## Features
- **Clickable Logo**: Click the logo to return to the home page. 
- **Navigation Links**: Navigate to pages like Home, About, Portfolio, Contact, and Blog.  
- **Responsive Design**: Automatically adapts to mobile, tablet, and desktop screens.  
- **Hover Effects**: Menu links and logo change color when hovered (**desktop only**).  
- **Sticky Header**: Navbar stays visible while scrolling. 
- **Accessible Navigation**: Semantic HTML with screen-reader friendly navigation.


> ⚠ Note: Hover effects are not available on mobile devices (touchscreens do not support hover).

> ℹ️ Note: Some navigation links are placeholders and may not open new pages yet.  
> This behavior is expected in the current version.

---

## How to Use

### Desktop & Tablet:
1. Open the website in a browser.  
2. Hover over menu links or the logo to see color changes.  
3. Click on links to navigate to the corresponding pages.  

### Mobile:
1. Open the website in a browser.  
2. The menu is stacked vertically below the logo.  
3. Click on the menu links to navigate.  
4. Hover effects are not available on mobile devices.  


---

## Responsive Behavior

| Device              | Layout                              |
|---------------------|-------------------------------------|
| Mobile (<768px)     | Logo on top, vertical menu          |
| Tablet (768–991px)  | Horizontal menu                     |
| Desktop (≥992px)    | Horizontal menu with wider spacing  |


> No manual adjustment is required.

---

## Installation
No installation or setup is required for users: 
1. Open `index.html` in a web browser.  
2. Use the navigation bar to move between pages.  

Everything is ready to use.

---

## Customization
- Menu links can be updated by editing the HTML file (`index.html`).  
- Logo text or image can be customized (replace the logo text or add an image inside `<a class="logo">`).  
- Colors, fonts, and spacing are controlled in `assets/css/style.css`.  
- Advanced features like toggle menus, dropdowns, or mega menus require additional JavaScript and may be added in future versions.  

---

## Compatibility
Works on modern browsers:  
- Google Chrome  
- Mozilla Firefox  
- Microsoft Edge  

Fully usable on mobile, tablet, and desktop devices.
