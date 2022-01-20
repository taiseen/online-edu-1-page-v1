// 13 Jan 2022 
const menu = document.getElementById('menu-btn');
const header = document.querySelector('.header');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('userClick');
});


window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    header.classList.remove('userClick');
});
