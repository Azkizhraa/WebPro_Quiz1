// Highlight the current page in the navigation
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = "#f4978e"; // Highlight the active link in a darker pastel shade
        }
    });
});

// Click-to-show description for local food and tourist places
const toggles = document.querySelectorAll(".toggle");
toggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
        const description = this.nextElementSibling;
        description.style.display = description.style.display === "block" ? "none" : "block";
    });
});

// Back-to-top button functionality
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

