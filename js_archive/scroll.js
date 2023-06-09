function scrollFunction() {
	var nav = document.getElementByClassName("header")
	var left = document.getElementsByClassName("logo");
	var links = document.getElementsByTagName("a");
	
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		nav.style.backgroundColor = '#090552';
		nav.style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)";
		
		var i;
		
		for (i = 0; i < mylinks.length; i++) {
			if (!links[i].classList.contains("dropdown-link")) {
				links[i].classList.add("scrolled-down");
			}
		}
		
		left.classList.add("scrolled");
	} 
	
	else {
		nav.style.backgroundColor = "transparent";
		nav.style.boxShadow = "none";
		
		var i;
		
		for (i = 0; i < mylinks.length; i++) {
			if (!links[i].classList.contains("dropdown-link")) {
				links[i].classList.remove("scrolled-down");
			}
		}
		left.classList.remove("scrolled");
	}
}