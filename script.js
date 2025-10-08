/* ===========================
   1. Hamburger / Mobile Menu
   - Handles toggling the mobile navigation menu
   - Animates hamburger icon into a cross
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
   - Displays a loader until page fully loads
   - Ensures minimum display time before fade-out
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
      document.body.style.overflow = "auto";
    }, 500); // matches the CSS transition duration
  }, remainingTime);
});

/* ===========================
   3. Section Animations (About Me)
   - Uses Intersection Observer
   - Adds "visible" class when sections enter viewport
   - Runs animation only once per section
=========================== */

// Select elements
const sections = document.querySelectorAll(
  ".animate-container"
);

// Use Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.2 } // trigger when 20% is visible
);

sections.forEach((section) => {
  observer.observe(section);
});

/* ===========================
   4. Smooth Scroll Navigation
   - Listens for nav link clicks
   - Scrolls smoothly to the target section
   - Uses scrollIntoView with smooth behavior
=========================== */

// Reusable function to handle smooth scrolling
const handleNavClick = function (event) {
  const targetId = event.target.dataset.target;
  const targetSection = document.getElementById(targetId); // Find the section by ID
  if (!targetSection) return; // safety check
  targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
};

// Desktop navigation container
const desktopNav = document.querySelector(".nav__links");

// Mobile navigation container
const mobileNav = document.querySelector(".nav__mobile-links");

// Attach the same scroll handler to both
desktopNav.addEventListener("click", handleNavClick);
mobileNav.addEventListener("click", handleNavClick);

/* ===========================
   5. Sticky Navigation
   - Uses Intersection Observer
   - Adds "fixed" class when header leaves viewport
   - Removes "fixed" class when header is visible
=========================== */

const header = document.querySelector(".header");
const navBar = document.querySelector(".nav");
const headObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      console.log("hello");
      navBar.classList.remove("fixed");
    } else {
      navBar.classList.add("fixed");
    }
  },
  {
    root: null,
    threshold: 0.01,
  }
);
headObserver.observe(header);
