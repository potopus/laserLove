// price slider
const swiper = new Swiper('.price-slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    slidesPerView: 'auto',
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-btns .swiper-button-right',
      prevEl: '.slider-btns .swiper-button-left',
    },
    // autoplay: {
    //     delay: 300, // задержка между прокруткой слайдов
    //     disableOnInteraction: true, //??? остановить прокрутку без взаимодействия пользователя
    //   },

  
  });

//   swiper.el.addEventListener('mouseenter', function () {
//     swiper.autoplay.start(); // останавливаем автопрокрутку при наведении
//   });
  
//   swiper.el.addEventListener('mouseleave', function () {
//     swiper.autoplay.stop(); // возобновляем автопрокрутку при уходе курсора мыши
//   });
// reviews slider

const reviewsSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    spaceBetween: -75,
    slidesPerGroup: 1,
    slidesPerView:  3,
    centeredSlides:true,
    autoHeight: true,
    pagination: {
      el: '.reviews .swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.slider-btns .swiper-button-right',
      prevEl: '.slider-btns .swiper-button-left',
    },
    // autoplay: {
    //     delay: 300, // задержка между прокруткой слайдов
    //     disableOnInteraction: true, //??? остановить прокрутку без взаимодействия пользователя
    //   },
    // effect: "coverflow",
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: -10,
    //   scale:0.5,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
  
  });

//   reviewsSwiper.el.addEventListener('mouseenter', function () {
//     reviewsSwiper.autoplay.start(); // останавливаем автопрокрутку при наведении
//   });
  
//   reviewsSwiper.el.addEventListener('mouseleave', function () {
//     reviewsSwiper.autoplay.stop(); // возобновляем автопрокрутку при уходе курсора мыши
//   });