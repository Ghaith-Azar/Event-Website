// Function to open the navigation
function openNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");

    if (window.innerWidth <= 500) {
        sidenav.style.width = "100%"; // Full screen on mobile
    } else {
        sidenav.style.width = "300px"; // Partial width on desktop
    }

    // Show overlay
    overlay.style.display = "block";
    document.body.classList.add('sidenav-active'); // Add class to body for styling
}

// Function to close the navigation
function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");

    // Close sidenav
    sidenav.style.width = "0";

    // Hide overlay
    overlay.style.display = "none";
    document.body.classList.remove('sidenav-active'); // Remove class from body
}

// Automatically close the nav when a link is clicked
const navLinks = document.querySelectorAll(".sidenav a");
navLinks.forEach(link => {
    link.addEventListener("click", closeNav);
});

// Ensure the nav is closed by default when the page loads
document.addEventListener("DOMContentLoaded", () => {
    closeNav();
});




