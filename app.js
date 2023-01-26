const navbarMenu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const headerMenu = document.getElementById("header");

// Open Navbar menu on Click
if (hamburger && navbarMenu) {
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		navbarMenu.classList.toggle("active");
	});
}

// Close Navbar Menu on Click
document.querySelectorAll(".menu-link").forEach((link) => {
	link.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navbarMenu.classList.remove("active");
	});
});

window.addEventListener("scroll", () => {
	if (this.scrollY >= 85) {
		headerMenu.classList.add("on-scroll");
	} else {
		headerMenu.classList.remove("on-scroll");
	}
});
