// Function to open the navigation
function openNav() {
    const sidenav = document.getElementById("mySidenav");

    if (window.innerWidth <= 768) {
        sidenav.style.width = "100%"; // Full screen on mobile
    } else {
        sidenav.style.width = "300px"; // Partial width on desktop
    }
}

// Function to close the navigation
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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
