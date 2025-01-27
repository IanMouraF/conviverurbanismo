// Variáveis para as instâncias do Swiper (tornando-as globais)
let galleryThumbs;
let galleryTop;

// Função para inicializar o Swiper
function initSwiper() {
  galleryThumbs = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  galleryTop = new Swiper(".mySwiper2", {
    effect: "coverflow",
    speed: 800,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
}

// Função para destruir o Swiper
function destroySwiper() {
  if (galleryTop) {
    galleryTop.destroy();
    galleryTop = null;
  }
  if (galleryThumbs) {
    galleryThumbs.destroy();
    galleryThumbs = null;
  }
}

// Mostrar o Swiper em tela cheia ao clicar na imagem
const galleryImages = document.querySelectorAll(".image-container");
const fullscreenSwiper = document.getElementById("fullscreen-swiper");
const closeButton = document.querySelector(".swiper-button-close");
const swiperContent = document.querySelector(".mySwiper2 .swiper-slide img");
const prevArrow = document.querySelector(".swiperthumb .swiper-button-prev");
const nextArrow = document.querySelector(".swiperthumb .swiper-button-next");
const thumbsContainer = document.querySelector(".mySwiper");

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    console.log("Imagem clicada");
    fullscreenSwiper.classList.remove("hidden");

    
    destroySwiper();

    
    initSwiper();

    galleryTop.slideToLoop(index, 0, false);
    console.log(index);
  });
});

// Fechar o Swiper em tela cheia
closeButton.addEventListener("click", () => {
  console.log("Botão de fechar clicado!");
  fullscreenSwiper.classList.add("hidden");
  destroySwiper(); 
});

// Fechar ao clicar fora da imagem
fullscreenSwiper.addEventListener("click", (event) => {
  if (
    !swiperContent.contains(event.target) && 
    !prevArrow.contains(event.target) && 
    !nextArrow.contains(event.target) && 
    !thumbsContainer.contains(event.target) 
  ) {
    fullscreenSwiper.classList.add("hidden");
    destroySwiper();
  }
});