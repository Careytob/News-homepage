const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

hamburger.addEventListener('click', (event) =>{
    body.classList.toggle('active');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(e => e.addEventListener('click',()=>{
    body.classList.remove('active');
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    
}));
