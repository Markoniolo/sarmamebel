"use strict";

var modalClear = document.querySelector('.modal-clear');
if (modalClear) modalClearInit();

function modalClearInit() {
  var modalClearCancel = modalClear.querySelector('.modal-clear__cancel');
  modalClearCancel.addEventListener('click', closeModal);

  function closeModal() {
    var btnCloseFancybox = modalClear.querySelector('.f-button.is-close-btn');
    btnCloseFancybox.click();
  }
}
//# sourceMappingURL=modal-clear.js.map
