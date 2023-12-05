const basketFixed = document.querySelector('.basket-fixed')

if (basketFixed) basketFixedInit()

function basketFixedInit () {
    const sidebar = document.querySelector('.basket__sidebar')
    window.addEventListener('scroll', checkScroll)
    checkScroll()

    function checkScroll () {
        const position = window.pageYOffset + sidebar.getBoundingClientRect().top
        const currentScroll = window.pageYOffset
        if (position + 150 - currentScroll - sidebar.clientHeight < 0) {
            basketFixed.classList.remove('basket-fixed_active')
        } else {
            basketFixed.classList.add('basket-fixed_active')
        }
    }
}
