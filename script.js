var header = document.querySelector("header");
var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

var banner = document.querySelector(".banner");
var aboutUs = document.querySelector("#about-us");

function scrollFunction() {
    // To color the banner
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 || header.classList.value === "header active") {
        header.style.backgroundColor = '#090552';

        // To add margin to the About Us anchor for scroll
    }
    else if ((document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) && header.classList.value !== "header active") {
        header.style.backgroundColor = 'transparent';
    }
}

function scrollMargin() {
    aboutUs.style.scrollMarginTop = (header.clientHeight + 20).toString() + "px";
}

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

function heroSizer() {
    if (window.innerWidth < 1250) {
        banner.classList.toggle("active");
    }
    else if (window.innerWidth >= 1250) {
        banner.classList.remove("active");
    }
}
