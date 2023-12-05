const tabsContainerArray = document.querySelectorAll('[data-role="tabs-container"]')

if (tabsContainerArray.length) tabsContainerArrayInit()

function tabsContainerArrayInit () {
    for (let i = 0; i < tabsContainerArray.length; i++) {
        tabsContainerInit(tabsContainerArray[i])
    }

    function tabsContainerInit (container) {
        const tabs = container.querySelectorAll('.tab')
        const steps = container.querySelectorAll('.tab-step')

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', tabToggle)
        }

        function tabToggle () {
            if (this.classList.contains('tab_active')) return
            const oldActiveTab = container.querySelector('.tab_active')
            oldActiveTab.classList.remove('tab_active')
            const oldActiveStep = container.querySelector('.tab-step_active')
            oldActiveStep.classList.remove('tab-step_active')
            this.classList.add('tab_active')
            const index = this.getAttribute('data-index')
            steps[index].classList.add('tab-step_active')
        }
    }
}
