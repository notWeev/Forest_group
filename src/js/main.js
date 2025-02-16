const navMobile = document.querySelector(".nav__mobile");
const navMobileLinks = document.querySelectorAll(".nav__mobile-link");
const burgerBtn = document.querySelector(".burger-btn");
const navBg = document.querySelector(".nav");
const footerYear = document.querySelector(".footer__year");

const showMobileNav = () => {
	navMobile.classList.toggle("nav__mobile--active");
	burgerBtn.classList.toggle("burger-btn--active");
};

const handleShadow = () => {
	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navBg.classList.add("nav__shadow-bg");
		} else {
			navBg.classList.remove("nav__shadow-bg");
		}
	});
};
handleShadow();

const handleCurrentYear = () => {
	const newYear = new Date().getFullYear();
	footerYear.innerText = newYear;
};
handleCurrentYear();

burgerBtn.addEventListener("click", showMobileNav);
navMobileLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navMobile.classList.remove("nav__mobile--active");
		burgerBtn.classList.remove("burger-btn--active");
	});
});
