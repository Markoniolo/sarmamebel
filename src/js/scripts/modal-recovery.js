const modalRecovery = document.querySelector('.modal-recovery')

if (modalRecovery) modalRecoveryInit()

function modalRecoveryInit () {
    const links = modalRecovery.querySelectorAll('.modal-recovery__link')
    const navBtns = modalRecovery.querySelectorAll('.modal-recovery__nav-btn')
    const phoneSpan = modalRecovery.querySelector('.modal-recovery__text-value-phone')
    const emailSpan = modalRecovery.querySelector('.modal-recovery__text-value-email')
    const emailInput = modalRecovery.querySelector('.modal-recovery__input_email')
    const phoneInput = modalRecovery.querySelector('.modal-recovery__input_phone')
    const submit = modalRecovery.querySelector('.modal-recovery__submit')
    const changeLogin = modalRecovery.querySelectorAll('.modal-recovery__change-login')
    const codeInputs = modalRecovery.querySelectorAll('.modal-recovery__code-input')

    submit.addEventListener('click', nextStep, {once: true})

    for (let i = 0; i < changeLogin.length; i++) {
        changeLogin[i].addEventListener('click', prevStep)
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', closeModalRecovery)
    }

    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].addEventListener('click', toggleNavBtn)
    }

    function nextStep () {
        modalRecovery.classList.add('modal-recovery_active')
        phoneSpan.innerHTML = phoneInput.value
        emailSpan.innerHTML = emailInput.value
        codeInputs[0].focus()
        validateCode()
        submit.removeEventListener('click', nextStep, {once: true})
        submit.addEventListener('click', doneStep, {once: true})
        submit.innerHTML = 'Восстановить'
    }

    function prevStep () {
        submit.innerHTML = 'Продолжить'
        modalRecovery.classList.remove('modal-recovery_active')
        phoneSpan.innerHTML = phoneInput.value
        emailSpan.innerHTML = emailInput.value
        resetValidateCode()
        submit.addEventListener('click', nextStep, {once: true})
        submit.removeEventListener('click', doneStep, {once: true})
    }

    function doneStep () {
        modalRecovery.classList.add('modal-recovery_done')
    }

    function toggleNavBtn () {
        if (this.classList.contains('modal-recovery__nav-btn_active')) return
        const oldActive = modalRecovery.querySelector('.modal-recovery__nav-btn_active')
        oldActive.classList.remove('modal-recovery__nav-btn_active')
        this.classList.add('modal-recovery__nav-btn_active')
        const value = this.getAttribute('data-value')
        if (value === 'email') {
            modalRecovery.classList.add('modal-recovery_email')
            modalRecovery.classList.remove('modal-recovery_phone')
        } else if (value === 'phone') {
            modalRecovery.classList.remove('modal-recovery_email')
            modalRecovery.classList.add('modal-recovery_phone')
        }
    }

    function closeModalRecovery () {
        const closeBtn = modalRecovery.querySelector('.f-button.is-close-btn')
        closeBtn.click()
    }

    function resetValidateCode () {
        for (let i = 0; i < codeInputs.length; i++) {
            codeInputs[i].removeEventListener('input', () => nextInput(codeInputs[i],i+1))
            codeInputs[i].value = ''
        }
        submit.disabled = false
    }

    function validateCode () {
        submit.disabled = true
        for (let i = 0; i < codeInputs.length; i++) {
            codeInputs[i].addEventListener('input', () => nextInput(codeInputs[i],i+1))
        }
    }

    function nextInput (input, i) {
        input.value = input.value.substring(0, 1)
        input.value = input.value.replace(/[^0-9]/g,'');
        if (codeInputs[i]) {
            codeInputs[i].focus()
        } else {
            codeInputs[i-1].blur()
        }
        checkCode()
    }

    function checkCode () {
        let isValid = true
        for (let i = 0; i < codeInputs.length; i++) {
            if (!codeInputs[i].value) isValid = false
        }
        submit.disabled = !isValid
    }
}
