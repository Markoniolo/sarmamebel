const compareButtons = document.querySelectorAll('[data-element="compare"]')

if (compareButtons.length) compareButtonsInit()

function compareButtonsInit () {
    const notification = document.querySelector('.notification')
    const notificationTitle = document.querySelector('.notification__title')
    const notificationName = document.querySelector('.notification__name')
    const notificationLink = document.querySelector('.notification__link')

    for (let i = 0; i < compareButtons.length; i++) {
        compareButtons[i].addEventListener('click', addToFavorite)
    }

    function addToFavorite () {
        const name = this.getAttribute('data-name')
        notificationName.innerHTML = name
        notificationTitle.innerHTML = 'Товар добавлен в сравнение'
        notificationLink.innerHTML = 'В избранное'
        notification.classList.add('notification_active')
        activateTimer()
    }

    function activateTimer () {
        setTimeout(notificationHide, 2000)
    }

    function notificationHide () {
        notification.classList.remove('notification_active')
    }
}
