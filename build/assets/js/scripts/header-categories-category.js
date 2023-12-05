"use strict";

var categoryButtons = document.querySelectorAll('[data-element="header-categories-category"]');
var blockArray = document.querySelectorAll('[data-element="header-categories-category-block"]');
var categoryWrap = document.querySelector('[data-element="header-categories-category-wrap"]');
var categoryLayer = document.querySelector('[data-element="header-category-layer"]');
if (categoryLayer) categoryLayer.addEventListener('click', closeCategoriesCategory);

for (var i = 0; i < categoryButtons.length; i++) {
  categoryButtons[i].addEventListener('click', toggleCategoriesCategory);
}

function toggleCategoriesCategory() {
  if (this.classList.contains('header-categories__category_active')) {
    closeCategoriesCategory();
  } else {
    closeOldCategory();
    categoryWrap.classList.add('header-categories__category-wrap_active');
    this.classList.add('header-categories__category_active');
    var index = this.getAttribute('data-index');
    blockArray[index].classList.add('header-categories__category-block_active');
    categoryLayer.classList.add('header-category-layer_active');
  }
}

function closeCategoriesCategory() {
  var activeCategory = document.querySelector('.header-categories__category_active');
  if (activeCategory) activeCategory.classList.remove('header-categories__category_active');
  var activeBlock = document.querySelector('.header-categories__category-block_active');
  if (activeBlock) activeBlock.classList.remove('header-categories__category-block_active');
  categoryWrap.classList.remove('header-categories__category-wrap_active');
  categoryLayer.classList.remove('header-category-layer_active');
}

function closeOldCategory() {
  var activeCategory = document.querySelector('.header-categories__category_active');
  if (activeCategory) activeCategory.classList.remove('header-categories__category_active');
  var activeBlock = document.querySelector('.header-categories__category-block_active');
  if (activeBlock) activeBlock.classList.remove('header-categories__category-block_active');
}
//# sourceMappingURL=header-categories-category.js.map
