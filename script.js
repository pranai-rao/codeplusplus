var header = document.querySelector("header");
var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");



function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 || header.classList.value == "header active") {
        header.style.backgroundColor = '#090552';
    }
    else if ((document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) && header.classList.value != "header active") {
        header.style.backgroundColor = 'transparent';
    }
}

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
    scrollFunction();
})
