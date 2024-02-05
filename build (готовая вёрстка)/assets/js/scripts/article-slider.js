"use strict";

var articleSliderArray = document.querySelectorAll('[data-element="article-slider"]');
if (articleSliderArray.length) articleSliderArrayInit();

function articleSliderArrayInit() {
  for (var i = 0; i < articleSliderArray.length; i++) {
    articleSliderInit(articleSliderArray[i]);
  }

  function articleSliderInit(slider) {
    var area = slider.closest('.article__slider-area');
    var nextEl = area.querySelector('.article__slider-btn_right');
    var prevEl = area.querySelector('.article__slider-btn_left');
    var scrollbar = slider.querySelector('.swiper-scrollbar');
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
//# sourceMappingURL=article-slider.js.map
