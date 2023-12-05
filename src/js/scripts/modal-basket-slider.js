const modalBasketSlider = document.querySelector('[data-element="modal-basket-slider"]')

if (modalBasketSlider) modalBasketSliderInit()

function modalBasketSliderInit () {
    const scrollbar = modalBasketSlider.querySelector('.modal-basket__scrollbar')

    const modalBasket = document.querySelector('.modal-basket')
    const close = modalBasket.querySelector('.modal-basket__close')
    close.addEventListener('click', closeModalBasket)

    function closeModalBasket () {
        const closeFancyboxBtn = modalBasket.querySelector('.f-button')
        closeFancyboxBtn.click()
    }

    const swiper = new Swiper(modalBasketSlider, {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.modal-basket__nav_right',
            prevEl: '.modal-basket__nav_left',
        },
        scrollbar: {
            el: scrollbar,
        },
    });
}
