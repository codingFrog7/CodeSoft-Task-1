// Simple menu toggle
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const backButton = document.querySelector('.back-button');

// Toggle menu when button is clicked
menuButton.onclick = function() {
    mobileMenu.classList.toggle('active');
}

// Close menu when clicking outside
document.onclick = function(event) {
    if (!mobileMenu.contains(event.target) && event.target !== menuButton) {
        mobileMenu.classList.remove('active');
    }
}

// Close menu when back button is clicked
backButton.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default link behavior
    mobileMenu.classList.remove('active');
});
