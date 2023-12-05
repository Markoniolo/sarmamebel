const order = document.querySelector('.order')

if (order) orderInit()

function orderInit () {
    const orderMore = document.querySelector('.order__sidebar-more')
    const sidebarHideItems = document.querySelectorAll('.order__sidebar-item_hide')

    if (orderMore) orderMore.addEventListener('click', orderMoreToggle)

    function orderMoreToggle () {
        if (orderMore.classList.contains('order__sidebar-more_active')) {
            orderMore.classList.remove('order__sidebar-more_active')
            orderMore.innerHTML = 'Развернуть'
            for (let i = 0; i < sidebarHideItems.length; i++) {
                sidebarHideItems[i].classList.add('order__sidebar-item_hide')
            }
        } else {
            orderMore.classList.add('order__sidebar-more_active')
            orderMore.innerHTML = 'Свернуть'
            for (let i = 0; i < sidebarHideItems.length; i++) {
                sidebarHideItems[i].classList.remove('order__sidebar-item_hide')
            }
        }
    }
}
