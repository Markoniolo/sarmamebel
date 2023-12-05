const headerLinkDropdown = document.querySelectorAll('[data-element="header-link-dropdown"]')

for (let i = 0; i < headerLinkDropdown.length; i++) {
    dropdownInit(headerLinkDropdown[i])
}

function dropdownInit (dropdown) {
    const activeClass = dropdown.getAttribute('data-active-class')
    const className = dropdown.getAttribute('data-class')
    dropdown.addEventListener('click', toggleDropdown)

    function toggleDropdown () {
        if (this.classList.contains(activeClass)) {
            this.classList.remove(activeClass)
        } else {
            const oldActive = document.querySelector(`.${activeClass}`)
            if (oldActive) oldActive.classList.remove(activeClass)
            this.classList.add(activeClass)
        }
    }

    window.addEventListener('click', closeDropdowns)

    function closeDropdowns (e) {
        const closestLink = e.target.closest(`.${className}`)
        if (closestLink) {
            if (closestLink.getAttribute('data-element') === 'header-link-dropdown') return
        }
        const active = document.querySelector(`.${activeClass}`)
        if (active) active.classList.remove(activeClass)
    }
}
