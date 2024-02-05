"use strict";

var anotherStockArray = document.querySelectorAll('[data-element="another-stock-slider"]');
if (anotherStockArray.length) anotherStockArrayInit();

function anotherStockArrayInit() {
  for (var i = 0; i < anotherStockArray.length; i++) {
    anotherStockInit(anotherStockArray[i]);
  }

  function anotherStockInit(slider) {
    var tileLine = slider.closest('.another-stock');
    var nextEl = tileLine.querySelector('.another-stock__nav-btn_right');
    var prevEl = tileLine.querySelector('.another-stock__nav-btn_left');
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
//# sourceMappingURL=another-stock-slider.js.map
