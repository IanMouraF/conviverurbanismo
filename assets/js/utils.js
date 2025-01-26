// Esconder o swiper
const galleryThumbs = new Swiper(".mySwiper", {
  
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const galleryTop = new Swiper(".mySwiper2", {
  effect: 'coverflow',
  speed: 800,
  spaceBetween: 10,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});


// Mostrar o Swiper em tela cheia ao clicar na imagem
const galleryImages = document.querySelectorAll(".image-container");
const fullscreenSwiper = document.getElementById("fullscreen-swiper");
const closeButton = document.querySelector(".swiper-button-close");
const swiperContent = document.querySelector(".mySwiper2 .swiper-slide img");
const prevArrow = document.querySelector(".swiperthumb .swiper-button-prev");
const nextArrow = document.querySelector(".swiperthumb .swiper-button-next");
const thumbsContainer = document.querySelector(".mySwiper");

closeButton.addEventListener("click", () => {
  console.log("Botão de fechar clicado!");
  fullscreenSwiper.classList.add("hidden");
});


galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    console.log("Imagem clicada");
    fullscreenSwiper.classList.remove("hidden");
    galleryTop.slideTo(index);
    console.log(index)
  });
});

// Fechar o Swiper em tela cheia
closeButton.addEventListener("click", () => {
  fullscreenSwiper.classList.add("hidden");
});

// Fechar ao clicar fora da imagem
fullscreenSwiper.addEventListener("click", (event) => {
  if (
    !swiperContent.contains(event.target) && // Fora da imagem principal
    !prevArrow.contains(event.target) && // Fora da seta "Anterior"
    !nextArrow.contains(event.target) && // Fora da seta "Próxima"
    !thumbsContainer.contains(event.target) // Fora das miniaturas
  ) {
    fullscreenSwiper.classList.add("hidden");
  }
});