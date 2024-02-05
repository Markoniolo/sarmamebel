"use strict";

var tileLineArray = document.querySelectorAll('[data-element="tile-line-slider"]');
if (tileLineArray.length) tileLineArrayInit();

function tileLineArrayInit() {
  for (var i = 0; i < tileLineArray.length; i++) {
    tileLineInit(tileLineArray[i]);
  }

  function tileLineInit(slider) {
    var tileLine = slider.closest('.tile-line');
    var nextEl = tileLine.querySelector('.tile-line__nav-btn_right');
    var prevEl = tileLine.querySelector('.tile-line__nav-btn_left');
    var scrollbar = tileLine.querySelector('.swiper-scrollbar');
    var swiper = new Swiper(slider, {
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
}
//# sourceMappingURL=tile-line-slider.js.map
