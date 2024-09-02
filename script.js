const nav = document.querySelector(".navigationbar");

document.addEventListener("scroll", () => {
	if (window.scrollY == 0) {
		nav.classList.remove("scrolled");
		nav.classList.remove("active");
		nav.classList.add("top");
	} else if (window.scrollY < 100) {
		nav.classList.remove("scrolled");
		nav.classList.remove("top");
		nav.classList.add("active");
	} else {
		nav.classList.remove("top");
		nav.classList.remove("active");
		nav.classList.add("scrolled");
	}
});
