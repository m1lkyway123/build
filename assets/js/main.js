const swiper = new Swiper(".projects__swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  mousewheel: true,
  keyboard: true,
  navigation: {
    nextEl: ".projects__swiper-next",
    prevEl: ".projects__swiper-prev",
  },
});