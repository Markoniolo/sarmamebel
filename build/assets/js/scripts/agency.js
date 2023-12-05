"use strict";

var agency = document.querySelector('[data-element="agency"]');
if (agency) agencyInit();

function agencyInit() {
  var tabs = document.querySelectorAll('.agency__tab');
  var list = document.querySelector('.agency__list');
  var items = document.querySelectorAll('.agency__item');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabsToggle);
  }

  function tabsToggle() {
    if (this.classList.contains('agency__tab_active')) {
      this.classList.remove('agency__tab_active');
      refreshItems(0);
    } else {
      var oldActiveTab = agency.querySelector('.agency__tab_active');
      if (oldActiveTab) oldActiveTab.classList.remove('agency__tab_active');
      this.classList.add('agency__tab_active');
      var index = +this.getAttribute('data-index');
      refreshItems(index);
    }
  }

  function refreshItems(index) {
    if (index === 0) {
      for (var _i = 0; _i < items.length; _i++) {
        items[_i].classList.remove('agency__item_hide');
      }
    } else {
      for (var _i2 = 0; _i2 < items.length; _i2++) {
        items[_i2].classList.add('agency__item_hide');
      }

      var itemsCurrent = list.querySelectorAll('[data-index="' + index + '"]');
      console.log(itemsCurrent);

      for (var _i3 = 0; _i3 < itemsCurrent.length; _i3++) {
        itemsCurrent[_i3].classList.remove('agency__item_hide');
      }
    }
  }
}
//# sourceMappingURL=agency.js.map
