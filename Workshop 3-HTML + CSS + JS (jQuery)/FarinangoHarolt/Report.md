# Workshop 3 Report

## Implementation Details

### HTML Structure
The project was structured into semantic HTML sections (`<nav>`, `<section>`, `<footer>`).
- A navigation bar with three links pointing to internal sections.
- A hero section to display a welcome message and a button for interaction.
- A gallery grid displaying 4 images.
- A contact form for user input.

### CSS Styling & Responsiveness
- **Flexbox** was utilized in the navigation bar to easily align the links horizontally and center them.
- **CSS Grid** was employed for the image gallery to create a responsive, auto-fitting grid layout (`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`).
- Hover effects were implemented on the navigation links, images, and buttons to enhance user interactivity.
- Responsiveness was guaranteed using **media queries** (e.g., stacking navigation links vertically on mobile devices).

### jQuery (Interactivity & Effects)
- **Toggle Effect:** Utilizing jQuery's `css()` method, clicking the button in the hero section dynamically changes its `background-color` to a randomly generated hex code.
- **Image Gallery Modal:** When an image is clicked, its source URL is fetched and injected into a modal image element. The modal is then displayed smoothly using jQuery's `fadeIn()` and `fadeOut()` for dismissal when clicking on the background or close button.
- **Form Validation:** Before submitting, jQuery intercepts the event using `e.preventDefault()`. It checks if fields are empty and applies a Regular Expression to validate the email format. A success alert is displayed if data is valid.

## Challenges Faced
- **Modal Centering:** Ensuring the modal centered the image both vertically and horizontally required combining `display: flex` with jQuery animations (`fadeIn()`). Using `.css("display", "flex").hide().fadeIn()` was necessary to allow flex centering before fading in.
- **Random Color Generation:** Generating a valid random color via Javascript needed converting a random number into base-16 (Hexadecimal) format efficiently.

## Screenshot
(Insert your screenshot of the working webpage here)

## Repository Link
(Insert the link to your Github repository here)

