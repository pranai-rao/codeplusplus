var header = document.querySelector("header");
var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
    scrollFunction();
})

function hamburgerCloser() {
    if (hamburger.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active")
    }
}