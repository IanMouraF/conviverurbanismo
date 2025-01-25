// Esconder o swiper

const galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  navigation: true,
});

const galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  centeredSlides: true,
  slideToClickedSlide: true,
});

galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

// Mostrar o Swiper em tela cheia ao clicar na imagem
const galleryImages = document.querySelectorAll(".image-container");
const fullscreenSwiper = document.getElementById("fullscreen-swiper");
const closeButton = document.querySelector(".swiper-button-close");

closeButton.addEventListener("click", () => {
  console.log("Botão de fechar clicado!");
  fullscreenSwiper.classList.add("hidden");
});


galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    fullscreenSwiper.classList.remove("hidden");
    galleryTop.slideTo(index);
  });
});

// Fechar o Swiper em tela cheia
closeButton.addEventListener("click", () => {
  fullscreenSwiper.classList.add("hidden");
});
