/*===== TOGGLE ICON NAVBAR =====*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*===== SCROLL SECTION ACTIVE LINK =====*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*="${sectionId}"]`).classList.add('active');
        }
    });

    document.querySelector('header').classList.toggle('sticky', scrollPosition > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*===== SCROLL REVEAL =====*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*===== TYPED JS =====*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer 🖥️', 'Front-end Developer 💻'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

