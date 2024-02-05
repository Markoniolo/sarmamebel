"use strict";

var headerLinkDropdown = document.querySelectorAll('[data-element="header-link-dropdown"]');

for (var i = 0; i < headerLinkDropdown.length; i++) {
  dropdownInit(headerLinkDropdown[i]);
}

function dropdownInit(dropdown) {
  var activeClass = dropdown.getAttribute('data-active-class');
  var className = dropdown.getAttribute('data-class');
  dropdown.addEventListener('click', toggleDropdown);

  function toggleDropdown() {
    if (this.classList.contains(activeClass)) {
      this.classList.remove(activeClass);
    } else {
      var oldActive = document.querySelector(".".concat(activeClass));
      if (oldActive) oldActive.classList.remove(activeClass);
      this.classList.add(activeClass);
    }
  }

  window.addEventListener('click', closeDropdowns);

  function closeDropdowns(e) {
    var closestLink = e.target.closest(".".concat(className));

    if (closestLink) {
      if (closestLink.getAttribute('data-element') === 'header-link-dropdown') return;
    }

    var active = document.querySelector(".".concat(activeClass));
    if (active) active.classList.remove(activeClass);
  }
}
//# sourceMappingURL=dropdown.js.map
