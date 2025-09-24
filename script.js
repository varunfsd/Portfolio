// Select the hamburger menu icon
const hamburgerIcon = document.querySelector(".menu-icon");

// Select the mobile menu container
const mobileMenu = document.querySelector(".mobile-menu");

// Toggle menu open/close on click
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active"); // Toggle hamburger animation
  mobileMenu.classList.toggle("show");      // Toggle mobile menu visibility
});