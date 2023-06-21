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