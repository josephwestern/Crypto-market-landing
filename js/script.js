// Display Menu 
function displayMenu() {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.getElementById('menu')
    navbar.classList.toggle('active')
    menuBtn.classList.toggle('fa-xmark')
}

// Scroll Animation 
let sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: '4000',
    delay: '400'
});
    sr.reveal('.hero, .coins-content');
    sr.reveal('.service-card-content', {origin: 'rigth', interval: 400});
    sr.reveal('.coins-logo img', {origin: 'bottom', interval: 300, rotate: {z:100}});
    sr.reveal('.why-cards-content:nth-child(1)', {origin: 'right', interval: 200, distance: '40px'});
    sr.reveal('.why-cards-content:nth-child(2)', {origin: 'left', interval: 200, distance: '40px'});
    sr.reveal('.why-cards-content:nth-child(3)', {origin: 'bottom', interval: 200, distance: '60px'});
    sr.reveal('.call-to-action-cards-content', {origin: 'bottom', interval: 400, rotate: {x:200}});
    sr.reveal('.call-to-action-btn', {origin: 'bottom', rotate: {x:200}});
    sr.reveal('.footer-nav, .footer-links, footer p', {origin: 'bottom', interval: 400});

// Display Login And Signup 
const loginSignup = document.querySelector('.login-signup');
const login = document.querySelector('.login');
const signup = document.querySelector('.signup');

function displayLogin(){
    loginSignup.style.display = 'flex';
    login.style.display = 'block';
    signup.style.display = 'none';
}

function displaySignup(){
    loginSignup.style.display = 'flex';
    signup.style.display = 'block';
    login.style.display = 'none';
}

function removeLoginSignup(){
    loginSignup.style.display = 'none';
}