const hamMenu = document.querySelector('.humburger-menu');
const listMenu = document.querySelector('.navigation');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("change");
    listMenu.classList.toggle("change");
})