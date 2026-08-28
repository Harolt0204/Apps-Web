# Workshop 2 - Website with HTML and CSS

## Objective
This project corresponds to Workshop 2. The main objective is to modify and enhance the website created in Workshop 1 by adding Cascading Style Sheets (CSS) to improve the layout, display, and overall visual design of the content.

## What was done?
1. **CSS Implementation Details & Modernization**: 
   - **Global Styles**: Typography was upgraded using the Google Font **"Poppins"**. Applied a global reset for margins/padding. The main body uses a softer background (`#f0f2f5`) with a dark text color (`#333`) and an improved line height for readability.
   - **Header & Navigation**: The `<header>` was enhanced with a modern linear gradient (blue tones) and shadow effects. The navigation menu (`<nav>`) was refactored using **Flexbox**, removing hardcoded `|` separators and replacing them with pill-shaped link buttons with smooth hover animations (`transform: translateY(-2px)` and `box-shadow`).
   - **Main Layout**: The `<main>` container was centered and elevated with a clean, deep `box-shadow` against a white background with rounded borders (`border-radius: 12px`), simulating a paper card layout.
   - **Profile Card (Grid)**: The "Personal Information" section in `index.html` was restructured using a new `.profile-card` class. It utilizes **CSS Grid** to display the profile picture and personal information side-by-side on larger screens, adjusting seamlessly for responsive design.
   - **Interactive Elements (Lists & Images)**: Images were set to responsive widths with rounded corners and shadows. Lists (like Academic Interests) received a modern styling with a left colored border, distinct background, and hover animations that translate them slightly to the right.
   - **Form Styling (Contact)**: The form design was refined to a modern card-like layout. Fields feature improved padding, rounded edges, and a sharp focus state highlighting the active field. The submit button uses the main gradient color theme with smooth hover transitions.

2. **HTML Updates**: 
   - Linked all HTML pages inside the `pages/` directory and the main `index.html` to the newly updated `style.css` file.
   - Cleaned up the `index.html` structure by adding structural `<div>` elements and classes to accommodate the new CSS Grid layout for the profile section.

## Structure
- `index.html`: Main home page.
- `pages/`: Contains all other internal pages (courses, schedule, contact, hobbies, clubs).
- `images/`: Stores all the images used across the website.
- `css/`: Contains the stylesheets (`style.css`).
