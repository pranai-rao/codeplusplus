// noinspection ES6ConvertVarToLetConst
var banner = document.querySelector(".banner");
var aboutUs = document.querySelector("#about-us");

var headerIsSticky = false;

function scrollFunction() {
    // To color the banner
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 || header.classList.value === "header active") {
        header.style.backgroundColor = '#090552';
    }
    else if ((document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) && header.classList.value !== "header active") {
        header.style.backgroundColor = 'transparent';
    }
}

function scrollMargin() {
    aboutUs.style.scrollMarginTop = (header.clientHeight + 20).toString() + "px";
}

function heroSizer() {
    if (window.innerWidth < 1250) {
        banner.classList.toggle("active");
    }
    else if (window.innerWidth >= 1250) {
        banner.classList.remove("active");
    }
}

// Slideshow js
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}