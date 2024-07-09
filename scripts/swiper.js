let swiperCards = new Swiper('.cardContent', {
    loop: true,
    spaceBetween: 32,
    grabCursor: false,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
});

let swiperCards2 = new Swiper('.cardContent2', {
  loop: true,
  spaceBetween: 32,
  grabCursor: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
});