"use strict";

var shopsAboutSliders = document.querySelectorAll('[data-element="shops-about-slider"]');
if (shopsAboutSliders.length) shopsAboutSlidersInit();

function shopsAboutSlidersInit() {
  for (var i = 0; i < shopsAboutSliders.length; i++) {
    shopsAboutSliderInit(shopsAboutSliders[i]);
  }

  function shopsAboutSliderInit(slider) {
    var scrollbar = slider.querySelector('.swiper-scrollbar');
    var swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      scrollbar: {
        el: scrollbar
      }
    });
  }
}
//# sourceMappingURL=shops-about-slider.js.map
