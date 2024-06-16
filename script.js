/*===== TOGGLE MODE ======*/
let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
    darkMode = !darkMode
});

/*===== TOGGLE ICON NAVBAR =====*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-times');
    if (menuIcon.classList.contains('fa-times')) {
        document.querySelector('.navbar').style = "display: block";
    } else {
        document.querySelector('.navbar').style = "display: none";
    }

    if (window.innerWidth > 768) {
        navbar.classList.toggle('active');
        document.querySelector('.navbar').style = "display: block";
    }
})

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

    /*===== STICKY NAVBAR =====*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    document.querySelector('header').classList.toggle('sticky', scrollPosition > 100);

    /*===== REMOVE TOGGLE ICON AND NAVBAR =====*/
    menuIcon.classList.remove('fa-times');
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
    strings: ['Software Engineer 🖥️', 'Full-Stack Developer 💻'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

