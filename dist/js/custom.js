const toggler = document.querySelector('.toggler-link'),
menu = document.querySelector('.header .menu');
toggler.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('toggler-link--active');
    menu.classList.toggle('mobil-menu');

});