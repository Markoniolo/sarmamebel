"use strict";

var articleSlider = document.querySelector('[data-element="article-slider-pagination"]');
if (articleSlider) articleSliderInit();

function articleSliderInit() {
  var pagination = articleSlider.querySelector('.swiper-pagination');
  var area = articleSlider.closest('.article__slider-area');
  var nextEl = area.querySelector('.article__slider-btn_right');
  var prevEl = area.querySelector('.article__slider-btn_left');
  var swiper = new Swiper(articleSlider, {
    slidesPerView: 'auto',
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl
    },
    pagination: {
      el: pagination
    }
  });
}
//# sourceMappingURL=article-slider-pagination.js.map
