"use strict";

var partners = document.querySelector('[data-element="partners"]');
if (partners) partnersInit();

function partnersInit() {
  var tabs = partners.querySelectorAll('.partners__tab');
  var items = partners.querySelectorAll('.partners__item');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', toggleTab);
  }

  function toggleTab() {
    if (this.classList.contains('partners__tab_active')) return;
    var oldActiveTab = partners.querySelector('.partners__tab_active');
    if (oldActiveTab) oldActiveTab.classList.remove('partners__tab_active');
    this.classList.add('partners__tab_active');
    var oldActiveItem = partners.querySelector('.partners__item_active');
    if (oldActiveItem) oldActiveItem.classList.remove('partners__item_active');
    var index = this.getAttribute('data-index');
    items[index].classList.add('partners__item_active');
  }
}
//# sourceMappingURL=partners.js.map
