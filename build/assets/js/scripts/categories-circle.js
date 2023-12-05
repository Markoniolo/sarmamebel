"use strict";

var categoriesCircleSlider = document.querySelector('[data-element="categories-circle-slider"]');
if (categoriesCircleSlider) categoriesCircleSliderInit();

function categoriesCircleSliderInit() {
  var swiper;
  window.addEventListener('resize', checkSlider);
  checkSlider();

  function checkSlider() {
    if (document.body.clientWidth > 1260) {
      initSlider();
    } else {
      if (swiper) swiper.destroy(true, true);
    }
  }

  function initSlider() {
    swiper = new Swiper(categoriesCircleSlider, {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}
//# sourceMappingURL=categories-circle.js.map
