"use strict";

var interiors = document.querySelector('[data-element="interiors"]');
if (interiors) interiorsInit();

function interiorsInit() {
  var slider = interiors.querySelector('[data-element="interiors-slider"]');
  var nextEl = interiors.querySelector('.interiors__nav-btn_right');
  var prevEl = interiors.querySelector('.interiors__nav-btn_left');
  var scrollbar = interiors.querySelector('.swiper-scrollbar');
  var swiper;
  window.addEventListener('resize', checkSlider);
  checkSlider();

  function initSlider() {
    swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      scrollbar: {
        el: scrollbar
      },
      navigation: {
        nextEl: nextEl,
        prevEl: prevEl
      }
    });
  }

  function checkSlider() {
    if (document.body.clientWidth < 1260) {
      if (swiper) swiper.destroy(true, true);
    } else {
      initSlider();
    }
  }
}
//# sourceMappingURL=interiors-slider.js.map
