"use strict";

var basket = document.querySelector('.basket');
if (basket) basketInit();

function basketInit() {
  var basketProducts = basket.querySelectorAll('.basket__area');

  for (var i = 0; i < basketProducts.length; i++) {
    basketProductInit(basketProducts[i]);
  }

  function basketProductInit(product) {
    var deleteBtn = product.querySelector('.basket__delete');
    var recoveryBtn = product.querySelector('.basket__delete-recovery');
    deleteBtn.addEventListener('click', deleteProduct);
    recoveryBtn.addEventListener('click', recoveryProduct);

    function deleteProduct() {
      product.classList.add('basket__area_delete');
      console.log('delete request');
    }

    function recoveryProduct() {
      product.classList.remove('basket__area_delete');
      console.log('recovery request');
    }
  }

  var basketMoreArray = basket.querySelectorAll('.basket__more');

  for (var _i = 0; _i < basketMoreArray.length; _i++) {
    basketMoreInit(basketMoreArray[_i]);
  }

  function basketMoreInit(more) {
    var scrollbar = more.querySelector('.basket__more__scrollbar');
    var moreButton = more.querySelector('.basket__more-button');
    var left = more.querySelector('.basket__more-nav_left');
    var right = more.querySelector('.basket__more-nav_right');
    var basketMoreSlider = more.querySelector('[data-element="basket__more-slider"]');
    moreButton.addEventListener('click', toggleMore);

    function toggleMore() {
      more.classList.toggle('basket__more_expand');
    }

    var swiper = new Swiper(basketMoreSlider, {
      slidesPerView: 'auto',
      navigation: {
        nextEl: right,
        prevEl: left
      },
      scrollbar: {
        el: scrollbar
      }
    });
  }
}
//# sourceMappingURL=basket.js.map
