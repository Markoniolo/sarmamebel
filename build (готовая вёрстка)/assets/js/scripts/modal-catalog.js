"use strict";

var modalCatalog = document.querySelector('[data-element="modal-catalog"]');
if (modalCatalog) modalCatalogInit();

function modalCatalogInit() {
  var searchInput = modalCatalog.querySelector('[data-element="modal-catalog-search-input"]');
  var searchAutocomplete = modalCatalog.querySelector('[data-element="search"]');
  var searchCloseBtn = modalCatalog.querySelector('[data-element="modal-catalog-search-close"]');
  var searchBackBtn = modalCatalog.querySelector('[data-element="modal-catalog__search-back"]');
  var items = document.querySelectorAll('[data-element="modal-catalog-item"]');
  var fulls = document.querySelectorAll('[data-element="modal-catalog-full"]');
  var catalogBack = document.querySelector('[data-element="modal-catalog-back"]');
  searchInput.addEventListener('focus', searchShow);
  searchCloseBtn.addEventListener('click', searchHide);
  searchBackBtn.addEventListener('click', searchHide);
  catalogBack.addEventListener('click', closeCategory);

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', openCategory);
  }

  function openCategory() {
    var index = this.getAttribute('data-index');
    fulls[index].classList.add('modal-catalog__full_active');
    modalCatalog.classList.add('modal-catalog_category-full');
    catalogBack.innerHTML = this.getAttribute('data-text');
  }

  function closeCategory() {
    var activeFull = document.querySelector('.modal-catalog__full_active');
    if (activeFull) activeFull.classList.remove('modal-catalog__full_active');
    modalCatalog.classList.remove('modal-catalog_category-full');
  }

  function searchShow() {
    modalCatalog.classList.add('modal-catalog_search');
    searchAutocomplete.classList.add('search_active');
    setTimeout(setFocus, 100);
  }

  function setFocus() {
    searchInput.focus();
  }

  function searchHide() {
    modalCatalog.classList.remove('modal-catalog_search');
    searchAutocomplete.classList.remove('search_active');
  }
}
//# sourceMappingURL=modal-catalog.js.map
