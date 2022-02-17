const sliderThumbs = new Swiper('.slider-thumbs', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  centeredSlides: true,
  loopedSlides: 5
});

sliderThumbs.on('click', (swiper)=> {
  swiper.slideTo(swiper.clickedIndex)
})

const sliderMain = new Swiper('.slider-main', {
  loop: true,
  // thumbs: {
  //   swiper: sliderThumbs 
  // },
  loopedSlides: 5
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;
