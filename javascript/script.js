const btn = document.getElementsByClassName('hamburger')[0];
const navbar = document.getElementsByClassName('hamburger-menu')[0];


btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});