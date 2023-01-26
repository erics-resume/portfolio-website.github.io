// 1st slides section

let slides = document.querySelectorAll(".slide");
let thumbnails = document.querySelectorAll(".thumbnail");
let currentSlide = document.querySelector(".slide.show");
let slideCount = slides.length;
let currentSlideId = currentSlide.dataset.slide;
let nextSlideBtn = document.querySelector(".slide-btn.next");
let prevSlideBtn = document.querySelector(".slide-btn.prev");
let nextSlideTimer = 3000;

thumbnails.forEach((thumbnail) => {
	thumbnail.addEventListener("click", showSlide);
});

// navbar menu

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
	navLink.classList.toggle("hide");
});
