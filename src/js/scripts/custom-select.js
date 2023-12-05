const customSelectArray = document.querySelectorAll('.custom-select')

if (customSelectArray.length) customSelectArrayInit()

function customSelectArrayInit() {
    for (let i = 0; i < customSelectArray.length; i++) {
        customSelectInit(customSelectArray[i])
    }

    window.addEventListener('click', closeAllSelect)
}

function customSelectInit(select) {
    const options = select.getElementsByTagName('option')
    createCustomSelect(options, select)
}

function createCustomSelect(options, select) {
    const view = select.querySelector('.custom-select__view')
    view.addEventListener('click', () => openSelect(view))

    const selectHtml = select.getElementsByTagName('select')[0]

    const dropdown = createDropdown()
    createOptions(dropdown, view, options, selectHtml)

    select.appendChild(dropdown)
}

function createDropdown() {
    const dropdown = document.createElement('div')
    dropdown.classList.add('custom-select__dropdown')
    return dropdown
}

function createOptions(dropdown, view, options, selectHtml) {
    for (let i = 0; i < options.length; i++) {
        const customOption = createOption(options[i])
        customOption.addEventListener('click', () => optionClickHandler(customOption, dropdown, view, selectHtml))
        if (options[i].selected) {
            customOption.classList.add('custom-select__option_active')
        }
        dropdown.appendChild(customOption)
    }
}

function createOption(optionHtml) {
    const customOption = document.createElement('div')
    customOption.classList.add('custom-select__option')
    customOption.setAttribute('data-value', optionHtml.getAttribute('value'))
    customOption.innerHTML = optionHtml.innerHTML
    return customOption
}

function optionClickHandler(option, dropdown, view, selectHtml) {
    const oldActiveOption = dropdown.querySelector('.custom-select__option_active')
    if (oldActiveOption) oldActiveOption.classList.remove('custom-select__option_active')
    option.classList.add('custom-select__option_active')
    view.innerHTML = option.innerHTML
    selectHtml.value = option.getAttribute('data-value')
    const event = new Event('change');
    selectHtml.dispatchEvent(event);
}

function openSelect(view) {
    const oldActiveSelect = document.querySelector('.custom-select__view_active')
    if (oldActiveSelect) oldActiveSelect.classList.remove('custom-select__view_active')
    view.classList.add('custom-select__view_active')
}

function closeAllSelect(e) {
    if (e.target.classList.contains('custom-select__view')) return
    const openSelectArray = document.querySelectorAll('.custom-select__view_active')
    for (let i = 0; i < openSelectArray.length; i++) {
        openSelectArray[i].classList.remove('custom-select__view_active')
    }
}
