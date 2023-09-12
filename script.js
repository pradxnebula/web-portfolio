const themeToggle = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');
let isDarkMode = true; // Start in dark mode by default

themeToggle.addEventListener('change', () => {
    if (isDarkMode) {
        // Switch to light mode
        themeLink.href = 'light-mode.css';

    } else {
        // Switch to dark mode
        themeLink.href = 'dark-mode.css';
    }

    // Toggle the mode
    isDarkMode = !isDarkMode;
});
