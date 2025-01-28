import Swiper from 'swiper'; 
import 'swiper/css'; // Importa os estilos do Swiper, se necessário

export function initCarousel() {
  new Swiper(".carrossel .swiper", {
    simulateTouch: true,
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
}