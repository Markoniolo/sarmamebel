"use strict";

var refundForm = document.querySelector('.refund__form');
if (refundForm) refundFormInit();

function refundFormInit() {
  var fileInput = refundForm.querySelector('.refund__file-input');
  var fileNote = refundForm.querySelector('.refund__file-note');
  var icon = refundForm.querySelector('.refund__file-icon');
  fileInput.addEventListener('change', setFileName);

  function setFileName() {
    fileNote.innerHTML = this.value.split("\\").pop();
    fileNote.classList.add('refund__file-note_active');
    icon.classList.add('refund__file-icon_active');
  }
}
//# sourceMappingURL=refund-form.js.map
