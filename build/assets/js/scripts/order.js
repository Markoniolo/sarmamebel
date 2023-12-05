"use strict";

var order = document.querySelector('.order');
if (order) orderInit();

function orderInit() {
  var orderMore = document.querySelector('.order__sidebar-more');
  var sidebarHideItems = document.querySelectorAll('.order__sidebar-item_hide');
  if (orderMore) orderMore.addEventListener('click', orderMoreToggle);

  function orderMoreToggle() {
    if (orderMore.classList.contains('order__sidebar-more_active')) {
      orderMore.classList.remove('order__sidebar-more_active');
      orderMore.innerHTML = 'Развернуть';

      for (var i = 0; i < sidebarHideItems.length; i++) {
        sidebarHideItems[i].classList.add('order__sidebar-item_hide');
      }
    } else {
      orderMore.classList.add('order__sidebar-more_active');
      orderMore.innerHTML = 'Свернуть';

      for (var _i = 0; _i < sidebarHideItems.length; _i++) {
        sidebarHideItems[_i].classList.remove('order__sidebar-item_hide');
      }
    }
  }
}
//# sourceMappingURL=order.js.map
