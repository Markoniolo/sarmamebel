"use strict";

var modalBasketSlider = document.querySelector('[data-element="modal-basket-slider"]');
if (modalBasketSlider) modalBasketSliderInit();

function modalBasketSliderInit() {
  var scrollbar = modalBasketSlider.querySelector('.modal-basket__scrollbar');
  var modalBasket = document.querySelector('.modal-basket');
  var close = modalBasket.querySelector('.modal-basket__close');
  close.addEventListener('click', closeModalBasket);

  function closeModalBasket() {
    var closeFancyboxBtn = modalBasket.querySelector('.f-button');
    closeFancyboxBtn.click();
  }

  var swiper = new Swiper(modalBasketSlider, {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.modal-basket__nav_right',
      prevEl: '.modal-basket__nav_left'
    },
    scrollbar: {
      el: scrollbar
    }
  });
}
//# sourceMappingURL=modal-basket-slider.js.map
