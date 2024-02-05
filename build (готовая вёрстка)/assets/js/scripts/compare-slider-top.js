"use strict";

var compareSliderTop = document.querySelector('[data-element="compare-slider-top"]');
if (compareSliderTop) compareSliderTopInit();

function compareSliderTopInit() {
  var nextEl = compareSliderTop.querySelector('.compare__nav-btn_right');
  var prevEl = compareSliderTop.querySelector('.compare__nav-btn_left');
  var scrollbar = compareSliderTop.querySelector('.swiper-scrollbar');
  var swiper = new Swiper(compareSliderTop, {
    slidesPerView: 'auto',
    scrollbar: {
      el: scrollbar
    },
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl
    }
  });
  var compareSliderBottom = document.querySelector('[data-element="compare-slider-bottom"]');
  var swiper1 = new Swiper(compareSliderBottom, {
    slidesPerView: 'auto'
  });
  swiper.controller.control = swiper1;
  swiper1.controller.control = swiper;
  window.addEventListener('scroll', checkIsSticky);

  function checkIsSticky() {
    var top = compareSliderTop.getBoundingClientRect().top;

    if (top === 0) {
      compareSliderTop.classList.add('compare__slider-top_sticky');
    } else {
      compareSliderTop.classList.remove('compare__slider-top_sticky');
    }
  }
}
//# sourceMappingURL=compare-slider-top.js.map
