"use strict";

var headerCatalog = document.querySelector('[data-element="header-catalog"]');
var catalog = document.querySelector('[data-element="catalog"]');
if (headerCatalog) headerCatalogInit();

function headerCatalogInit() {
  var sidebarLinks = catalog.querySelectorAll('[data-element="catalog-sidebar-link"]');
  var areas = catalog.querySelectorAll('[data-element="catalog-area"]');
  var categoryLayer = document.querySelector('[data-element="header-category-layer"]');
  categoryLayer.addEventListener('click', closeCatalog);
  headerCatalog.addEventListener('click', toggleCatalog);

  for (var i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener('mouseover', toggleSidebarLink);
  }

  function toggleSidebarLink() {
    var oldActiveLink = catalog.querySelector('.catalog__sidebar-link_active');
    if (oldActiveLink) oldActiveLink.classList.remove('catalog__sidebar-link_active');
    this.classList.add('catalog__sidebar-link_active');
    var oldActiveArea = catalog.querySelector('.catalog__area_active');
    if (oldActiveArea) oldActiveArea.classList.remove('catalog__area_active');
    var index = this.getAttribute('data-index');
    areas[index].classList.add('catalog__area_active');
  }

  function toggleCatalog() {
    if (this.classList.contains('header__catalog_active')) {
      closeCatalog();
    } else {
      closeCategoriesCategory();
      this.classList.add('header__catalog_active');
      catalog.classList.add('catalog_active');
      categoryLayer.classList.add('header-category-layer_active');
    }
  }

  function closeCatalog() {
    headerCatalog.classList.remove('header__catalog_active');
    catalog.classList.remove('catalog_active');
    categoryLayer.classList.remove('header-category-layer_active');
  }

  function closeCategoriesCategory() {
    var activeCategory = document.querySelector('.header-categories__category_active');
    if (activeCategory) activeCategory.classList.remove('header-categories__category_active');
    var activeBlock = document.querySelector('.header-categories__category-block_active');
    if (activeBlock) activeBlock.classList.remove('header-categories__category-block_active');
    var categoryWrap = document.querySelector('[data-element="header-categories-category-wrap"]');
    categoryWrap.classList.remove('header-categories__category-wrap_active');
    categoryLayer.classList.remove('header-category-layer_active');
  }
}
//# sourceMappingURL=header-catalog.js.map
