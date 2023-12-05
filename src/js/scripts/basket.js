const basket = document.querySelector('.basket')

if (basket) basketInit()

function basketInit () {
    const basketProducts = basket.querySelectorAll('.basket__area')

    for (let i = 0; i < basketProducts.length; i++) {
        basketProductInit(basketProducts[i])
    }

    function basketProductInit (product) {
        const deleteBtn = product.querySelector('.basket__delete')
        const recoveryBtn = product.querySelector('.basket__delete-recovery')
        deleteBtn.addEventListener('click', deleteProduct)
        recoveryBtn.addEventListener('click', recoveryProduct)

        function deleteProduct () {
            product.classList.add('basket__area_delete')
            console.log('delete request')
        }

        function recoveryProduct () {
            product.classList.remove('basket__area_delete')
            console.log('recovery request')
        }
    }

    const basketMoreArray = basket.querySelectorAll('.basket__more')
    for (let i = 0; i < basketMoreArray.length; i++) {
        basketMoreInit(basketMoreArray[i])
    }

    function basketMoreInit (more) {
        const scrollbar = more.querySelector('.basket__more__scrollbar')
        const moreButton = more.querySelector('.basket__more-button')
        const left = more.querySelector('.basket__more-nav_left')
        const right = more.querySelector('.basket__more-nav_right')
        const basketMoreSlider = more.querySelector('[data-element="basket__more-slider"]')

        moreButton.addEventListener('click', toggleMore)

        function toggleMore () {
            more.classList.toggle('basket__more_expand')
        }

        const swiper = new Swiper(basketMoreSlider, {
            slidesPerView: 'auto',
            navigation: {
                nextEl: right,
                prevEl: left,
            },
            scrollbar: {
                el: scrollbar,
            },
        });
    }
}
