const productCardSlider = document.querySelector('[data-element="product-card-slider"]')

if (productCardSlider) productCardSliderInit()

function productCardSliderInit () {
    let swiper
    const pagination = productCardSlider.querySelector('.swiper-pagination')

    window.addEventListener('resize', checkSlider)
    checkSlider()

    function checkSlider () {
        if (document.body.clientWidth < 1260) {
            initSlider()
        } else {
            if (swiper) swiper.destroy( true, true )
        }
    }

    function initSlider () {
        swiper = new Swiper(productCardSlider, {
            slidesPerView: 'auto',
            loop: true,
            pagination: {
                el: pagination,
            },
        });
    }
}
