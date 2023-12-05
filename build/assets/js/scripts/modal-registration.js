"use strict";

var modalRegistration = document.querySelector('.modal-registration');
if (modalRegistration) modalRegistrationInit();

function modalRegistrationInit() {
  var goLogin = modalRegistration.querySelector('[data-element="modal-registration-go-login"]');
  goLogin.addEventListener('click', closeModalRegistration);

  function closeModalRegistration() {
    var closeBtn = modalRegistration.querySelector('.f-button.is-close-btn');
    closeBtn.click();
  }
}
//# sourceMappingURL=modal-registration.js.map
