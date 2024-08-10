document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carouselExample');
    const inner = carousel.querySelector('.carousel-inner');
    const items = inner.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.carousel-control-next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
});
