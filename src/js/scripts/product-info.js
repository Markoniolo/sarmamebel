const productInfoItems = document.querySelectorAll('.product-info__item')

if (productInfoItems.length) productInfoItemsInit()

function productInfoItemsInit () {
    const navItems = document.querySelectorAll('[data-element="product-card-nav-item"]')

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', toggleProductNavItem)
    }

    function toggleProductNavItem () {
        const old = document.querySelector('.product-info__item_active')
        if (old) old.classList.remove('product-info__item_active')
        const index = this.getAttribute('data-index')
        if (productInfoItems[index]) productInfoItems[index].classList.add('product-info__item_active')
    }

    for (let i = 0; i < productInfoItems.length; i++) {
        productInfoItems[i].addEventListener('click', toggleProductItem)
    }

    function toggleProductItem () {
        const old = document.querySelector('.product-info__item_active')
        if (old) old.classList.remove('product-info__item_active')
        this.classList.add('product-info__item_active')
    }
}
