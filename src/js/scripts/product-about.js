const productAboutItemTopArray = document.querySelectorAll('[data-element="product-about-item-top"]')

if (productAboutItemTopArray.length) productAboutItemTopArrayInit()

function productAboutItemTopArrayInit () {
    for (let i = 0; i < productAboutItemTopArray.length; i++) {
        productAboutItemTopArray[i].addEventListener('click', toggleItem)
    }

    function toggleItem () {
        const old = document.querySelector('.product-about__item-top_active')
        if (old) old.classList.remove('product-about__item-top_active')
        this.classList.toggle('product-about__item-top_active')
    }

}
