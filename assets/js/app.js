var swiper = new Swiper(".carrossel .swiper", {
  speed: 700,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".carrossel .swiper-button-next",
    prevEl: ".carrossel .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  dynamicBullets: true,
  dynamicMainBullets: 1,
  autoplay: {
    delay: 8000,
  },
});

