const navMobile = document.querySelector(".nav__mobile");
const navMobileLinks = document.querySelectorAll(".nav__moblie-link");

const burgerBtn = document.querySelector(".burger-btn");

const showMobileNav = () => {
	navMobile.classList.toggle("nav__mobile--active");
	burgerBtn.classList.toggle("burger-btn--active")
};

burgerBtn.addEventListener("click", showMobileNav);
navMobileLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navMobile.classList.remove("nav__mobile--active")
		burgerBtn.classList.remove("burger-btn--active")
	}
	);
});
