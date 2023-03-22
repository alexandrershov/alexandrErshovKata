const mySwiper = document.querySelectorAll('.mySwiper');
const swiperPagination = document.querySelectorAll('.swiper-pagination');
let i = 0;

mySwiper.forEach(element => {
    var swiper = new Swiper( element, {
        spaceBetween: 24,
        pagination: {
            el: swiperPagination[i]
        },
        mousewhell: true,
        keyboard: true, 
        slidesPerView: 'auto',
        breakpoints: {
            768: {
                enabled: false
                }
            }
        }) 
    i++;
});