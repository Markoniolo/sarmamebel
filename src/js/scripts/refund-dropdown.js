const refundDropdownArray = document.querySelectorAll('.refund__dropdown')

if (refundDropdownArray.length) refundDropdownInit()

function refundDropdownInit () {
    for (let i = 0; i < refundDropdownArray.length; i++) {
        refundDropdownArray[i].addEventListener('click', toggleDropdown)
    }

    function toggleDropdown () {
        this.classList.toggle('refund__dropdown_active')
    }
}
