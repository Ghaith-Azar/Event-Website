function openNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");
    const navLinks = document.querySelectorAll('.sidenav li');

    sidenav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Animate links with staggered delay
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index * 0.1}s`;
    });
}

function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");
    
    sidenav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';

    // Reset animations
    document.querySelectorAll('.sidenav li').forEach(link => {
        link.style.animation = '';
    });
}

// Close nav when clicking overlay
document.getElementById('overlay').addEventListener('click', closeNav);

// Close nav when clicking links
document.querySelectorAll('.sidenav a').forEach(link => {
    link.addEventListener('click', closeNav);
});

// Close nav on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
});