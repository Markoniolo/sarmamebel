"use strict";

var filters = document.querySelector('[data-element="filters"]');
if (filters) filtersInit();

function filtersInit() {
  var dropdowns = document.querySelectorAll('[data-element="filters-dropdown"]');

  for (var i = 0; i < dropdowns.length; i++) {
    dropdownsInit(dropdowns[i]);
  }

  function dropdownsInit(dropdown) {
    var name = dropdown.querySelector('[data-element="filters-dropdown-name"]');
    name.addEventListener('click', toggleDropdown);

    function toggleDropdown() {
      dropdown.classList.toggle('filters__dropdown_active');
    }
  }

  var rangePrice = document.querySelector('.filters__range-slider');
  if (rangePrice) rangePriceInit();

  function rangePriceInit() {
    var minInput = document.querySelector('.filters__range-input_min');
    var maxInput = document.querySelector('.filters__range-input_max');
    var min = rangePrice.getAttribute('data-min');
    var max = rangePrice.getAttribute('data-max');
    var options = {
      container: rangePrice,
      showRuler: false,
      showValue: false,
      oninput: updateRangeValue,
      showLabel: false,
      oninit: initRangeValue,
      min: min,
      max: max,
      step: 1,
      value_min: min,
      value_max: max
    };
    var multiRangeSlider1 = new MultiRangeSlider(options);

    function initRangeValue(e) {
      minInput.value = e.minValue;
      maxInput.value = e.maxValue;
    }

    function updateRangeValue(e) {
      minInput.value = e.minValue;
      maxInput.value = e.maxValue;
    }
  }
}
//# sourceMappingURL=filters.js.map
