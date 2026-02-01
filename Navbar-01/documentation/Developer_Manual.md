# Developer Manual

## Project Goal
The purpose of this project is to demonstrate:
   - Proper HTML structure
   - Clean CSS organization
   - Responsive layout using Flexbox
   - Readable and maintainable code with comments

## HTML Structure Overview
   - `<!DOCTYPE html>` ensures HTML5 compatibility.
   - `<header>` contains the navigation bar.
   - `<nav>` holds the logo and menu links.
   - `<ul>` and `<li>` organize navigation links semantically.

The HTML is semantic, meaning each tag has a clear purpose.

## CSS Architecture

### Global Reset
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Ensures consistent rendering across browsers.

Layout System
       •	Flexbox is used for horizontal and vertical alignment.
       •	justify-content and align-items control spacing and centering.

Responsiveness
       •	Media query at max-width: 767px
       •	Layout switches from row to column
       •	Improves mobile usability

Key Design Decisions
       •	Sticky header for better navigation
       •	Neutral color palette for clarity

How to Extend the Project
       •	Add JavaScript for a hamburger menu
       •	Create reusable navbar components
       •	Convert into a template system
       •	Integrate with backend pages (PHP, React, etc.)

Coding Philosophy
This project follows these principles:
       •	Clarity over complexity
       •	Structure before styling
       •	Understanding before speed
       •	Consistency over motivation

