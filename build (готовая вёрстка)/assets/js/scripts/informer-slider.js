"use strict";

var informerSliderArray = document.querySelectorAll('[data-element="informer-slider"]');
if (informerSliderArray.length) informerSliderInit();

function informerSliderInit() {
  for (var i = 0; i < informerSliderArray.length; i++) {
    var swiper = new Swiper(informerSliderArray[i], {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 5000
      }
    });
  }
}
//# sourceMappingURL=informer-slider.js.map
