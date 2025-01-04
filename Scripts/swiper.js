const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable looping
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
