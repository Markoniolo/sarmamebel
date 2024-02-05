"use strict";

var customSelectArray = document.querySelectorAll('.custom-select');
if (customSelectArray.length) customSelectArrayInit();

function customSelectArrayInit() {
  for (var i = 0; i < customSelectArray.length; i++) {
    customSelectInit(customSelectArray[i]);
  }

  window.addEventListener('click', closeAllSelect);
}

function customSelectInit(select) {
  var options = select.getElementsByTagName('option');
  createCustomSelect(options, select);
}

function createCustomSelect(options, select) {
  var view = select.querySelector('.custom-select__view');
  view.addEventListener('click', function () {
    return openSelect(view);
  });
  var selectHtml = select.getElementsByTagName('select')[0];
  var dropdown = createDropdown();
  createOptions(dropdown, view, options, selectHtml);
  select.appendChild(dropdown);
}

function createDropdown() {
  var dropdown = document.createElement('div');
  dropdown.classList.add('custom-select__dropdown');
  return dropdown;
}

function createOptions(dropdown, view, options, selectHtml) {
  var _loop = function _loop(i) {
    var customOption = createOption(options[i]);
    customOption.addEventListener('click', function () {
      return optionClickHandler(customOption, dropdown, view, selectHtml);
    });

    if (options[i].selected) {
      customOption.classList.add('custom-select__option_active');
    }

    dropdown.appendChild(customOption);
  };

  for (var i = 0; i < options.length; i++) {
    _loop(i);
  }
}

function createOption(optionHtml) {
  var customOption = document.createElement('div');
  customOption.classList.add('custom-select__option');
  customOption.setAttribute('data-value', optionHtml.getAttribute('value'));
  customOption.innerHTML = optionHtml.innerHTML;
  return customOption;
}

function optionClickHandler(option, dropdown, view, selectHtml) {
  var oldActiveOption = dropdown.querySelector('.custom-select__option_active');
  if (oldActiveOption) oldActiveOption.classList.remove('custom-select__option_active');
  option.classList.add('custom-select__option_active');
  view.innerHTML = option.innerHTML;
  selectHtml.value = option.getAttribute('data-value');
  var event = new Event('change');
  selectHtml.dispatchEvent(event);
}

function openSelect(view) {
  var oldActiveSelect = document.querySelector('.custom-select__view_active');
  if (oldActiveSelect) oldActiveSelect.classList.remove('custom-select__view_active');
  view.classList.add('custom-select__view_active');
}

function closeAllSelect(e) {
  if (e.target.classList.contains('custom-select__view')) return;
  var openSelectArray = document.querySelectorAll('.custom-select__view_active');

  for (var i = 0; i < openSelectArray.length; i++) {
    openSelectArray[i].classList.remove('custom-select__view_active');
  }
}
//# sourceMappingURL=custom-select.js.map
