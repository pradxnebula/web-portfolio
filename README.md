# A guide to the added customisations in this portfolio project

---

## Dark-Light Mode Toggle Feature

I added a Dark-Light mode toggle feature to this portfolio website project, allowing users to switch between different visual modes based on their preferences. Below are the key steps involved in implementing this feature:

### Step 1: CSS File Separation
To enable seamless switching between dark and light modes, I initially cloned the main `style.css` file into two separate CSS files, namely `dark-mode.css` and `light-mode.css`. These files contain specific styling instructions for each mode, ensuring a smooth transition when switching between them.

### Step 2: Build the Toggle Button
I created a user-friendly toggle button on the main page of the website. This toggle button serves as the user interface element for switching between dark and light modes. It's designed to be easy to use, with a visual indicator logo that reflects the current mode.

### Step 3: Default to Dark Mode
I maintained the default state of website to be in dark mode bec the orignal project was itself in to the dark mode. So. when the website is loaded or reloaded by the user, the website will be in dark mode by default.

### Step 4: JavaScript Implementation
The core functionality of the dark-light mode toggle is implemented using JavaScript. When the user interacts with the toggle button (i.e., switches it left or right), the JavaScript code is triggered. It detects the toggle state and applies the appropriate CSS file (`dark-mode.css` or `light-mode.css`) to the webpage. 

By following these steps, I successfully integrated the dark-light mode toggle feature into this portfolio website, enhancing user experience and allowing visitors to tailor the site's appearance to their liking.

## Other Customisations

Changed some basic profile info and manipulated 'My Skill' tab learning bars in `index.html`. Also modified some css to suit the visual interface for light mode in `light-mode.css`.
<hr>
The project is hosted at pradxnebula.github.io/web-portfolio

