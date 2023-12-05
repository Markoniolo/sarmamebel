"use strict";

var modalLogin = document.querySelector('.modal-login');
if (modalLogin) modalLoginInit();

function modalLoginInit() {
  var goRegistration = modalLogin.querySelector('[data-element="modal-login-go-registration"]');
  var title = modalLogin.querySelector('.modal-login__title');
  var recoveryLink = modalLogin.querySelector('.modal-login__recovery');
  var phoneValueSpan = modalLogin.querySelector('.modal-login__phone-value');
  var codeInputs = modalLogin.querySelectorAll('.modal-login__code-input');
  var changeNumberBtn = modalLogin.querySelector('.modal-login__change-number');
  var modalSubmit = modalLogin.querySelector('.modal-login__submit');
  var loginInput = modalLogin.querySelector('.modal-login__input_login');
  var pasInput = modalLogin.querySelector('.modal-login__input_password');
  modalSubmit.addEventListener('click', loginNextStep, {
    once: true
  });
  loginInput.addEventListener('input', validate);
  goRegistration.addEventListener('click', closeModalLogin);
  recoveryLink.addEventListener('click', closeModalLogin);

  function closeModalLogin() {
    var closeBtn = modalLogin.querySelector('.f-button.is-close-btn');
    closeBtn.click();
  }

  function resetValidateCode() {
    var _loop = function _loop(i) {
      codeInputs[i].removeEventListener('input', function () {
        return nextInput(codeInputs[i], i + 1);
      });
      codeInputs[i].value = '';
    };

    for (var i = 0; i < codeInputs.length; i++) {
      _loop(i);
    }
  }

  function validateCode() {
    var _loop2 = function _loop2(i) {
      codeInputs[i].addEventListener('input', function () {
        return nextInput(codeInputs[i], i + 1);
      });
    };

    for (var i = 0; i < codeInputs.length; i++) {
      _loop2(i);
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

    for (var i = 0; i < codeInputs.length; i++) {
      if (!codeInputs[i].value) isValid = false;
    }

    modalSubmit.disabled = !isValid;
  }

  function loginNextStep() {
    var isPhone = checkIsPhone();

    if (isPhone) {
      modalLogin.classList.add('modal-login_phone');
      modalSubmit.disabled = true;
      modalSubmit.innerHTML = 'Войти';
      phoneValueSpan.innerHTML = loginInput.value;
      modalSubmit.addEventListener('click', sendPhone, {
        once: true
      });
      changeNumberBtn.addEventListener('click', loginPrevStep, {
        once: true
      });
      codeInputs[0].focus();
      validateCode();
    } else {
      modalLogin.classList.add('modal-login_email');
      modalSubmit.innerHTML = 'Войти';
      modalSubmit.disabled = true;
      pasInput.addEventListener('input', validate);
      modalSubmit.addEventListener('click', sendEmail, {
        once: true
      });
    }
  }

  function loginPrevStep() {
    modalSubmit.removeEventListener('click', sendPhone, {
      once: true
    });
    modalLogin.classList.remove('modal-login_phone');
    modalSubmit.disabled = true;
    modalSubmit.addEventListener('click', loginNextStep, {
      once: true
    });
    resetValidateCode();
  }

  function sendPhone() {
    showLoader();
    var code = '';

    for (var i = 0; i < codeInputs.length; i++) {
      code = code + codeInputs[i].value;
    }

    console.log({
      login: loginInput.value,
      code: code
    });
  }

  function sendEmail() {
    showLoader();
    console.log({
      login: loginInput.value,
      password: pasInput.value
    });
  }

  function showLoader() {
    modalSubmit.disabled = true;
    title.innerHTML = 'Ещё пару секунд';
    modalLogin.classList.add('modal-login_loader');
  }

  function checkIsPhone() {
    var regex = new RegExp('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$');
    return regex.test(loginInput.value);
  }

  function closeModal() {
    modalLogin.classList.remove('modal-login_phone');
    modalLogin.classList.remove('modal-login_email');
  }

  function validate() {
    if (this.value) {
      modalSubmit.disabled = false;
    } else {
      modalSubmit.disabled = true;
    }
  }
}
//# sourceMappingURL=modal-login.js.map
