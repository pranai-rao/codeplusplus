var header = document.querySelector("#header");
var main = document.querySelector("main");

function spacer() {
    var vhHeader = header.clientHeight / window.innerHeight * 100;
    var vhMain = 100 - vhHeader;
    main.style.minHeight = vhMain.toString() + "vh";
}