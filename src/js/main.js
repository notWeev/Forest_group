const navMobile = document.querySelector(".nav__mobile");
const burgerBtn = document.querySelector(".burger-btn");
const navMobileLinks = document.querySelectorAll(".nav__moblie-link");

const showMobileNav = () => {
	navMobile.classList.toggle("nav__mobile--active");
};

burgerBtn.addEventListener("click", showMobileNav);
navMobileLinks.forEach((link) => {
	link.addEventListener("click", () =>
		navMobile.classList.remove("nav__mobile--active")
	);
});
