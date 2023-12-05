const filters = document.querySelector('[data-element="filters"]')

if (filters) filtersInit()

function filtersInit () {
    const dropdowns = document.querySelectorAll('[data-element="filters-dropdown"]')

    for (let i = 0; i < dropdowns.length; i++) {
        dropdownsInit(dropdowns[i])
    }

    function dropdownsInit (dropdown) {
        const name = dropdown.querySelector('[data-element="filters-dropdown-name"]')
        name.addEventListener('click', toggleDropdown)

        function toggleDropdown () {
            dropdown.classList.toggle('filters__dropdown_active')
        }
    }

    const rangePrice = document.querySelector('.filters__range-slider')

    if (rangePrice) rangePriceInit()

    function rangePriceInit () {
        const minInput = document.querySelector('.filters__range-input_min')
        const maxInput = document.querySelector('.filters__range-input_max')

        const min = rangePrice.getAttribute('data-min')
        const max = rangePrice.getAttribute('data-max')

        let options = {
            container: rangePrice,
            showRuler: false, showValue: false, oninput: updateRangeValue, showLabel: false, oninit: initRangeValue,
            min: min,
            max: max,
            step: 1,
            value_min: min,
            value_max: max,
        };

        let multiRangeSlider1 = new  MultiRangeSlider(options);

        function initRangeValue (e) {
            minInput.value = e.minValue
            maxInput.value = e.maxValue
        }

        function updateRangeValue (e) {
            minInput.value = e.minValue
            maxInput.value = e.maxValue
        }
    }
}
