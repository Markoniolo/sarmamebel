"use strict";

var productCardSlider = document.querySelector('[data-element="product-card-slider"]');
if (productCardSlider) productCardSliderInit();

function productCardSliderInit() {
  var swiper;
  var pagination = productCardSlider.querySelector('.swiper-pagination');
  window.addEventListener('resize', checkSlider);
  checkSlider();

  function checkSlider() {
    if (document.body.clientWidth < 1260) {
      initSlider();
    } else {
      if (swiper) swiper.destroy(true, true);
    }
  }

  function initSlider() {
    swiper = new Swiper(productCardSlider, {
      slidesPerView: 'auto',
      loop: true,
      pagination: {
        el: pagination
      }
    });
  }
}
//# sourceMappingURL=product-card-slider.js.map
