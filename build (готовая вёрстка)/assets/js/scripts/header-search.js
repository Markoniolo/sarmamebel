"use strict";

var searchBox = document.querySelector('[data-element="header-search-box"]');
if (searchBox) headerSearchInit();

function headerSearchInit() {
  var search = searchBox.querySelector('[data-element="search"]');
  var searchLayer = document.querySelector('[data-element="search-layer"]');
  var headerSearch = document.querySelector('[data-element="header-search"]');
  headerSearch.addEventListener('focus', showSearch);
  headerSearch.addEventListener('blur', hideSearch);
  searchLayer.addEventListener('click', hideSearch);

  function showSearch() {
    search.classList.add('search_active');
    searchLayer.classList.add('search-layer_active');
    searchBox.classList.add('header__search-box_active');
  }

  function hideSearch() {
    search.classList.remove('search_active');
    searchLayer.classList.remove('search-layer_active');
    searchBox.classList.remove('header__search-box_active');
  }
}
//# sourceMappingURL=header-search.js.map
