var java = document.querySelector("#java");
var python = document.querySelector("#python");
var web_design = document.querySelector("#html");

function scrollMarginJava() {
    scrollMargin(java);
}

function scrollMarginPython() {
    scrollMargin(python);
}

function scrollMarginWeb() {
    scrollMargin(web_design);
}

function scrollMargin(lang) {
    lang.style.scrollMarginTop = (header.clientHeight + 20).toString() + "px";
}