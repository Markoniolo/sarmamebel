"use strict";

var capSlider = document.querySelector('[data-element="cap-slider"]');
if (capSlider) capSliderInit();

function capSliderInit() {
  var pagination = capSlider.querySelector('.swiper-pagination');
  var swiper = new Swiper(capSlider, {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.cap__nav_right',
      prevEl: '.cap__nav_left'
    },
    pagination: {
      el: pagination
    }
  });
}
//# sourceMappingURL=cap-slider.js.map
