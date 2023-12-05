const refundForm = document.querySelector('.refund__form')

if (refundForm) refundFormInit()

function refundFormInit () {
    const fileInput = refundForm.querySelector('.refund__file-input')
    const fileNote = refundForm.querySelector('.refund__file-note')
    const icon = refundForm.querySelector('.refund__file-icon')

    fileInput.addEventListener('change', setFileName)

    function setFileName () {
        fileNote.innerHTML = this.value.split("\\").pop()
        fileNote.classList.add('refund__file-note_active')
        icon.classList.add('refund__file-icon_active')
    }
}
