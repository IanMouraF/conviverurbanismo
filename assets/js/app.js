var swiper = new Swiper(".carrossel .swiper", {
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

window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
  } else {
      backToTopButton.style.display = 'none';
  }
});

document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

