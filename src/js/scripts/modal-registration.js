const modalRegistration = document.querySelector('.modal-registration')

if (modalRegistration) modalRegistrationInit()

function modalRegistrationInit () {
    const goLogin = modalRegistration.querySelector('[data-element="modal-registration-go-login"]')

    goLogin.addEventListener('click', closeModalRegistration)

    function closeModalRegistration () {
        const closeBtn = modalRegistration.querySelector('.f-button.is-close-btn')
        closeBtn.click()
    }
}
