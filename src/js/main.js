const navMobile = document.querySelector(".nav__mobile");
const navMobileLinks = document.querySelectorAll(".nav__mobile-link");
const burgerBtn = document.querySelector(".burger-btn");
const navBg = document.querySelector(".nav");
const footerYear = document.querySelector(".footer__year");

const scrollSpySections = document.querySelectorAll('.section')
const menuLinks = document.querySelectorAll('.nav__desktop-link')
const firstSection = document.querySelector('.nav__desktop-link:first-of-type')
const isContactPage = window.location.pathname.includes('contact.html');

const showMobileNav = () => {
	navMobile.classList.toggle("nav__mobile--active");
	burgerBtn.classList.toggle("burger-btn--active");
};

const handleCurrentYear = () => {
	const newYear = new Date().getFullYear();
	footerYear.innerText = newYear;
};
handleCurrentYear();

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page') && !isContactPage) {
		const sections = []

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 90) {
				sections.push(section)
				
				const activeSection = document.querySelector(`[href*=${sections[0].id}]`)

				menuLinks.forEach(link => link.classList.remove('nav__desktop-link--active'))
				activeSection.classList.add('nav__desktop-link--active')
			}
			if (window.innerHeight + window.scrollY <= document.body.offsetHeight) {
				menuLinks.forEach(link => link.classList.remove('nav__desktop-link--active'))
				firstSection.classList.add('nav__desktop-link--active')
			}
		})
	} else if (isContactPage) {
        menuLinks.forEach(link => link.classList.remove('nav__desktop-link--active'));
        const contactLink = document.querySelector('.nav__desktop-link[href="contact.html"]');
        contactLink.classList.add('nav__desktop-link--active');
    }
}

burgerBtn.addEventListener("click", showMobileNav);
navMobileLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navMobile.classList.remove("nav__mobile--active");
		burgerBtn.classList.remove("burger-btn--active");
	});
});

window.addEventListener('scroll', handleScrollSpy)
handleScrollSpy();