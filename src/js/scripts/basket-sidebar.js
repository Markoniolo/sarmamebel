const basketSidebar = document.querySelector('.basket__sidebar')

if (basketSidebar) basketSidebarInit()

function basketSidebarInit () {
    initRange()

    initNav()

    function initNav () {
        const navButtons = basketSidebar.querySelectorAll('.basket__sidebar-nav-btn')
        const steps = basketSidebar.querySelectorAll('.basket__sidebar-step')

        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].addEventListener('click', toggleNav)
        }

        function toggleNav () {
            if (this.classList.contains('basket__sidebar-nav-btn_active')) return
            const oldActiveNav = basketSidebar.querySelector('.basket__sidebar-nav-btn_active')
            if (oldActiveNav) oldActiveNav.classList.remove('basket__sidebar-nav-btn_active')
            const index = this.getAttribute('data-index')
            this.classList.add('basket__sidebar-nav-btn_active')
            const oldActiveStep = basketSidebar.querySelector('.basket__sidebar-step_active')
            if (oldActiveStep) oldActiveStep.classList.remove('basket__sidebar-step_active')
            steps[index].classList.add('basket__sidebar-step_active')
        }
    }

    function initRange () {
        const basketRangeSlider = basketSidebar.querySelector('.basket__range-slider')
        const basketRangeInput = basketSidebar.querySelector('.basket__sidebar-bonus-input')

        basketRangeInput.addEventListener('input', setSliderValue)

        function setSliderValue () {
            basketRangeSlider.value = this.value
            basketRangeInput.value = basketRangeSlider.value
        }

        basketRangeSlider.addEventListener('change', (evt) => {
            basketRangeInput.value = evt.detail.value1
        })
    }
}
