const toggler = document.querySelector('.toggler-link');
toggler.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.firstChild.classList.toggle('toggler-link-active');
});