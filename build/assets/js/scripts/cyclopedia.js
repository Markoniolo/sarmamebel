"use strict";

var cyclopedia = document.querySelector('.cyclopedia');
if (cyclopedia) cyclopediaInit();

function cyclopediaInit() {
  var scrollbar = cyclopedia.querySelector('.swiper-scrollbar');
  var nextEl = cyclopedia.querySelector('.cyclopedia__nav-button_right');
  var prevEl = cyclopedia.querySelector('.cyclopedia__nav-button_left');
  swiper = new Swiper(".cyclopedia__slider", {
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
//# sourceMappingURL=cyclopedia.js.map
