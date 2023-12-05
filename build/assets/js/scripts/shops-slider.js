"use strict";

var shopsSlider = document.querySelector('[data-element="shops-slider"]');
if (shopsSlider) shopsSliderInit();

function shopsSliderInit() {
  var swiper = new Swiper(shopsSlider, {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination'
    },
    autoplay: {
      delay: 5000
    }
  });
}
//# sourceMappingURL=shops-slider.js.map
