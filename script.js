/*==================== toggle icon navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== scroll sections active link ====================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/*==================== scroll reveal ====================*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'Frontend Developer', 'IT Marketing Specialist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})