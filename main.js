// JavaScript to hide/show header on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Downscroll - hide header
        header.classList.add('hidden-header');
        header.classList.remove('show-header');
    } else {
        // Upscroll - show header
        header.classList.remove('hidden-header');
        header.classList.add('show-header');
    }
    lastScrollTop = scrollTop;
});
