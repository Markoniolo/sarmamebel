"use strict";

var productInfoItems = document.querySelectorAll('.product-info__item');
if (productInfoItems.length) productInfoItemsInit();

function productInfoItemsInit() {
  var navItems = document.querySelectorAll('[data-element="product-card-nav-item"]');

  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', toggleProductNavItem);
  }

  function toggleProductNavItem() {
    var old = document.querySelector('.product-info__item_active');
    if (old) old.classList.remove('product-info__item_active');
    var index = this.getAttribute('data-index');
    if (productInfoItems[index]) productInfoItems[index].classList.add('product-info__item_active');
  }

  for (var _i = 0; _i < productInfoItems.length; _i++) {
    productInfoItems[_i].addEventListener('click', toggleProductItem);
  }

  function toggleProductItem() {
    var old = document.querySelector('.product-info__item_active');
    if (old) old.classList.remove('product-info__item_active');
    this.classList.add('product-info__item_active');
  }
}
//# sourceMappingURL=product-info.js.map
