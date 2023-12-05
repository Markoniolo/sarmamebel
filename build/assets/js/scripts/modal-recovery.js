"use strict";

var modalRecovery = document.querySelector('.modal-recovery');
if (modalRecovery) modalRecoveryInit();

function modalRecoveryInit() {
  var links = modalRecovery.querySelectorAll('.modal-recovery__link');
  var navBtns = modalRecovery.querySelectorAll('.modal-recovery__nav-btn');
  var phoneSpan = modalRecovery.querySelector('.modal-recovery__text-value-phone');
  var emailSpan = modalRecovery.querySelector('.modal-recovery__text-value-email');
  var emailInput = modalRecovery.querySelector('.modal-recovery__input_email');
  var phoneInput = modalRecovery.querySelector('.modal-recovery__input_phone');
  var submit = modalRecovery.querySelector('.modal-recovery__submit');
  var changeLogin = modalRecovery.querySelectorAll('.modal-recovery__change-login');
  var codeInputs = modalRecovery.querySelectorAll('.modal-recovery__code-input');
  submit.addEventListener('click', nextStep, {
    once: true
  });

  for (var i = 0; i < changeLogin.length; i++) {
    changeLogin[i].addEventListener('click', prevStep);
  }

  for (var _i = 0; _i < links.length; _i++) {
    links[_i].addEventListener('click', closeModalRecovery);
  }

  for (var _i2 = 0; _i2 < navBtns.length; _i2++) {
    navBtns[_i2].addEventListener('click', toggleNavBtn);
  }

  function nextStep() {
    modalRecovery.classList.add('modal-recovery_active');
    phoneSpan.innerHTML = phoneInput.value;
    emailSpan.innerHTML = emailInput.value;
    codeInputs[0].focus();
    validateCode();
    submit.removeEventListener('click', nextStep, {
      once: true
    });
    submit.addEventListener('click', doneStep, {
      once: true
    });
    submit.innerHTML = 'Восстановить';
  }

  function prevStep() {
    submit.innerHTML = 'Продолжить';
    modalRecovery.classList.remove('modal-recovery_active');
    phoneSpan.innerHTML = phoneInput.value;
    emailSpan.innerHTML = emailInput.value;
    resetValidateCode();
    submit.addEventListener('click', nextStep, {
      once: true
    });
    submit.removeEventListener('click', doneStep, {
      once: true
    });
  }

  function doneStep() {
    modalRecovery.classList.add('modal-recovery_done');
  }

  function toggleNavBtn() {
    if (this.classList.contains('modal-recovery__nav-btn_active')) return;
    var oldActive = modalRecovery.querySelector('.modal-recovery__nav-btn_active');
    oldActive.classList.remove('modal-recovery__nav-btn_active');
    this.classList.add('modal-recovery__nav-btn_active');
    var value = this.getAttribute('data-value');

    if (value === 'email') {
      modalRecovery.classList.add('modal-recovery_email');
      modalRecovery.classList.remove('modal-recovery_phone');
    } else if (value === 'phone') {
      modalRecovery.classList.remove('modal-recovery_email');
      modalRecovery.classList.add('modal-recovery_phone');
    }
  }

  function closeModalRecovery() {
    var closeBtn = modalRecovery.querySelector('.f-button.is-close-btn');
    closeBtn.click();
  }

  function resetValidateCode() {
    var _loop = function _loop(_i3) {
      codeInputs[_i3].removeEventListener('input', function () {
        return nextInput(codeInputs[_i3], _i3 + 1);
      });

      codeInputs[_i3].value = '';
    };

    for (var _i3 = 0; _i3 < codeInputs.length; _i3++) {
      _loop(_i3);
    }

    submit.disabled = false;
  }

  function validateCode() {
    submit.disabled = true;

    var _loop2 = function _loop2(_i4) {
      codeInputs[_i4].addEventListener('input', function () {
        return nextInput(codeInputs[_i4], _i4 + 1);
      });
    };

    for (var _i4 = 0; _i4 < codeInputs.length; _i4++) {
      _loop2(_i4);
    }
  }

  function nextInput(input, i) {
    input.value = input.value.substring(0, 1);
    input.value = input.value.replace(/[^0-9]/g, '');

    if (codeInputs[i]) {
      codeInputs[i].focus();
    } else {
      codeInputs[i - 1].blur();
    }

    checkCode();
  }

  function checkCode() {
    var isValid = true;

    for (var _i5 = 0; _i5 < codeInputs.length; _i5++) {
      if (!codeInputs[_i5].value) isValid = false;
    }

    submit.disabled = !isValid;
  }
}
//# sourceMappingURL=modal-recovery.js.map
