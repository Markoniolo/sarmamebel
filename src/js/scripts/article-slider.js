const articleSliderArray = document.querySelectorAll('[data-element="article-slider"]')

if (articleSliderArray.length) articleSliderArrayInit()

function articleSliderArrayInit () {
    for (let i = 0; i < articleSliderArray.length; i++) {
        articleSliderInit(articleSliderArray[i])
    }

    function articleSliderInit (slider) {
        const area = slider.closest('.article__slider-area')
        const nextEl = area.querySelector('.article__slider-btn_right')
        const prevEl = area.querySelector('.article__slider-btn_left')
        const scrollbar = slider.querySelector('.swiper-scrollbar')
        const swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            scrollbar: {
                el: scrollbar
            },
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
        });
    }
}
