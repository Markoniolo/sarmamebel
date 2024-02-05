"use strict";

var refundDropdownArray = document.querySelectorAll('.refund__dropdown');
if (refundDropdownArray.length) refundDropdownInit();

function refundDropdownInit() {
  for (var i = 0; i < refundDropdownArray.length; i++) {
    refundDropdownArray[i].addEventListener('click', toggleDropdown);
  }

  function toggleDropdown() {
    this.classList.toggle('refund__dropdown_active');
  }
}
//# sourceMappingURL=refund-dropdown.js.map
