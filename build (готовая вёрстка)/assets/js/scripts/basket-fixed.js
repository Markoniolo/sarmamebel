"use strict";

var basketFixed = document.querySelector('.basket-fixed');
if (basketFixed) basketFixedInit();

function basketFixedInit() {
  var sidebar = document.querySelector('.basket__sidebar');
  window.addEventListener('scroll', checkScroll);
  checkScroll();

  function checkScroll() {
    var position = window.pageYOffset + sidebar.getBoundingClientRect().top;
    var currentScroll = window.pageYOffset;

    if (position + 150 - currentScroll - sidebar.clientHeight < 0) {
      basketFixed.classList.remove('basket-fixed_active');
    } else {
      basketFixed.classList.add('basket-fixed_active');
    }
  }
}
//# sourceMappingURL=basket-fixed.js.map
