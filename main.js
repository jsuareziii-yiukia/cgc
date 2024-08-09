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

// Smooth scroll for "See More" button
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
});
