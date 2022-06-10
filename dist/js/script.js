document.addEventListener(`DOMContentLoaded`, () =>{
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        observer: true,
      });
});