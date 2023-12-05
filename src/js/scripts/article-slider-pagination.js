const articleSlider = document.querySelector('[data-element="article-slider-pagination"]')

if (articleSlider) articleSliderInit()

function articleSliderInit () {
    const pagination = articleSlider.querySelector('.swiper-pagination')
    const area = articleSlider.closest('.article__slider-area')
    const nextEl = area.querySelector('.article__slider-btn_right')
    const prevEl = area.querySelector('.article__slider-btn_left')

    const swiper = new Swiper(articleSlider, {
        slidesPerView: 'auto',
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
        },
        pagination: {
            el: pagination,
        },
    });
}
