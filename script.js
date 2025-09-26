/* ===========================
   1. Hamburger / Mobile Menu
=========================== */

// Select the hamburger menu icon element
const hamburgerIcon = document.querySelector(".nav__menu-icon");

// Select the mobile menu container
const mobileMenu = document.querySelector(".nav__mobile-menu");

// Add a click event listener to the hamburger icon
hamburgerIcon.addEventListener("click", () => {
  // Toggle the "active" class to animate the hamburger into a cross
  hamburgerIcon.classList.toggle("active");

  // Toggle the "show" class to display or hide the mobile menu
  mobileMenu.classList.toggle("show");
});


/* ===========================
   2. Preloader / Loading Screen
=========================== */

// Select the preloader element
const preloader = document.getElementById("preloader");

// Minimum time (in milliseconds) to display the preloader
const MIN_PRELOADER_TIME = 1500;

// Record the start time when the script runs
const startTime = Date.now();

// Wait until the page fully loads
window.addEventListener("load", () => {
  // Calculate how much time has already elapsed
  const elapsedTime = Date.now() - startTime;

  // Calculate remaining time to meet minimum display duration
  const remainingTime = Math.max(MIN_PRELOADER_TIME - elapsedTime, 0);

  // Wait for the remaining time if needed
  setTimeout(() => {
    // Start fading out the preloader
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    // After fade-out completes, hide the preloader completely
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // matches the CSS transition duration
  }, remainingTime);
});