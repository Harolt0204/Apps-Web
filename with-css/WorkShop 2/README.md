# Workshop 2 - Website with HTML and CSS

## Objective
This project corresponds to Workshop 2. The main objective is to modify and enhance the website created in Workshop 1 by adding Cascading Style Sheets (CSS) to improve the layout, display, and overall visual design of the content.

## What was done?
1. **CSS Implementation Details**: 
   - **Global Styles**: Applied a global reset for margins/padding and set the base font family to `Arial, sans-serif`. The main body uses a light gray background (`#f4f4f9`) with a dark text color (`#333`).
   - **Header & Navigation**: The `<header>` was styled with a dark blue background (`#2c3e50`) and centered content. Navigation links (`<nav>`) were given a distinct teal color (`#18bc9c`), bold font weight, and custom hover states (`text-decoration: underline; color: #ffffff`) to improve interactivity.
   - **Main Layout**: The `<main>` container was centered using `margin: 0 auto`, restricted to a `max-width` of 800px, and elevated with a subtle CSS box-shadow (`box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)`) against a white background.
   - **Images & Tables**: Images were set to responsive widths (`max-width: 100%`) with slightly rounded corners (`border-radius: 8px`). Tables were styled with collapsed borders, padding, and a styled header (`th`) matching the main header color.
   - **Form Styling (Contact)**: The form was transformed into a clean, card-like layout with a max-width of 600px. All `input`, `select`, and `textarea` fields were given full width (`100%`), padding, thin borders, and a focus state highlighting the active field with a teal glow (`box-shadow: 0 0 5px rgba(24, 188, 156, 0.5)`). The submit button was stylized with a solid background and smooth hover transitions.
2. **HTML Updates**: Linked all HTML pages inside the `pages/` directory and the main `index.html` to the newly created `style.css` file.

## Structure
- `index.html`: Main home page.
- `pages/`: Contains all other internal pages (courses, schedule, contact, hobbies, clubs).
- `images/`: Stores all the images used across the website.
- `css/`: Contains the stylesheets (`style.css`).
