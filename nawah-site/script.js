// ===== Toggle Hamburger Menu =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ===== Navbar Hide on Scroll Down, Show on Scroll Up =====
let previousScroll = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > previousScroll) {
        navbar.style.top = "-80px"; // اختفاء الشريط عند النزول
    } else {
        navbar.style.top = "0"; // ظهور الشريط عند الصعود
    }

    previousScroll = currentScroll;
});
