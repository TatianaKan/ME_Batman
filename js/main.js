//burger
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
  navigation.classList.add('navigation-active');
});

navigationClose.addEventListener('click', () => {
  navigation.classList.remove('navigation-active');
});


///music
try {
  const mute = document.querySelector('.mute__checkbox');
  const audio = new Audio('audio/audio/waterTower.mp3');

  const checkMute = () => {
    if (mute.checked) {
      audio.play();
    } else {
      audio.pause();
    };
  }
  mute.addEventListener('change', checkMute);
} catch {

}
////slider
try {
  const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 5
  });

  sliderThumbs.on('click', (swiper) => {
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

  const videos = document.querySelectorAll('video');
  sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i += 1) {
      videos[i].pause();
    }
  });
}
catch {
}