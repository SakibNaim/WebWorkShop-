// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector(".nav-links");
    document.querySelector(".logo").addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
