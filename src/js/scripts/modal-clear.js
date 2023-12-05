const modalClear = document.querySelector('.modal-clear')

if (modalClear) modalClearInit()

function modalClearInit () {
    const modalClearCancel = modalClear.querySelector('.modal-clear__cancel')
    modalClearCancel.addEventListener('click', closeModal)

    function closeModal () {
        const btnCloseFancybox = modalClear.querySelector('.f-button.is-close-btn')
        btnCloseFancybox.click()
    }
}
