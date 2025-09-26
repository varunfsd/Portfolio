/* ===========================
   1. Hamburger / Mobile Menu
=========================== */

// Select the hamburger menu icon
const hamburgerIcon = document.querySelector(".nav__menu-icon");

// Select the mobile menu container
const mobileMenu = document.querySelector(".nav__mobile-menu");

// Toggle mobile menu visibility and hamburger animation on click
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active"); // Animate hamburger icon (cross)
  mobileMenu.classList.toggle("show"); // Show / hide mobile menu
});

/* ===========================
   2. Preloader / Loading Screen
=========================== */

// Select preloader container
const preloader = document.getElementById("preloader");

// Minimum time (in ms) to display preloader
const MIN_PRELOADER_TIME = 1500; // 1.5 seconds

// Record the time when the script runs
const startTime = Date.now();

// Wait until the page fully loads
window.addEventListener("load", () => {
  const elapsedTime = Date.now() - startTime; // Time already spent loading
  const remainingTime = Math.max(MIN_PRELOADER_TIME - elapsedTime, 0); // Ensure minimum display

  // Wait remaining time if needed, then fade out preloader
  setTimeout(() => {
    preloader.style.opacity = "0"; // Start fade-out
    preloader.style.transition = "opacity 0.5s ease";

    // After fade-out, remove preloader from view
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // Matches fade-out duration
  }, remainingTime);
});
