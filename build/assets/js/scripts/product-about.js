"use strict";

var productAboutItemTopArray = document.querySelectorAll('[data-element="product-about-item-top"]');
if (productAboutItemTopArray.length) productAboutItemTopArrayInit();

function productAboutItemTopArrayInit() {
  for (var i = 0; i < productAboutItemTopArray.length; i++) {
    productAboutItemTopArray[i].addEventListener('click', toggleItem);
  }

  function toggleItem() {
    var old = document.querySelector('.product-about__item-top_active');
    if (old) old.classList.remove('product-about__item-top_active');
    this.classList.toggle('product-about__item-top_active');
  }
}
//# sourceMappingURL=product-about.js.map
