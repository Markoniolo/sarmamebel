const headerCatalog = document.querySelector('[data-element="header-catalog"]')
const catalog = document.querySelector('[data-element="catalog"]')

if (headerCatalog) headerCatalogInit()

function headerCatalogInit () {
    const sidebarLinks = catalog.querySelectorAll('[data-element="catalog-sidebar-link"]')
    const areas = catalog.querySelectorAll('[data-element="catalog-area"]')
    const categoryLayer = document.querySelector('[data-element="header-category-layer"]')
    categoryLayer.addEventListener('click', closeCatalog )
    headerCatalog.addEventListener('click', toggleCatalog)

    for (let i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].addEventListener('mouseover', toggleSidebarLink)
    }

    function toggleSidebarLink () {
        const oldActiveLink = catalog.querySelector('.catalog__sidebar-link_active')
        if (oldActiveLink) oldActiveLink.classList.remove('catalog__sidebar-link_active')
        this.classList.add('catalog__sidebar-link_active')
        const oldActiveArea = catalog.querySelector('.catalog__area_active')
        if (oldActiveArea) oldActiveArea.classList.remove('catalog__area_active')
        const index = this.getAttribute('data-index')
        areas[index].classList.add('catalog__area_active')
    }

    function toggleCatalog () {
        if (this.classList.contains('header__catalog_active')) {
            closeCatalog()
        } else {
            closeCategoriesCategory()
            this.classList.add('header__catalog_active')
            catalog.classList.add('catalog_active')
            categoryLayer.classList.add('header-category-layer_active')
        }
    }

    function closeCatalog () {
        headerCatalog.classList.remove('header__catalog_active')
        catalog.classList.remove('catalog_active')
        categoryLayer.classList.remove('header-category-layer_active')
    }

    function closeCategoriesCategory () {
        const activeCategory = document.querySelector('.header-categories__category_active')
        if (activeCategory) activeCategory.classList.remove('header-categories__category_active')
        const activeBlock = document.querySelector('.header-categories__category-block_active')
        if (activeBlock) activeBlock.classList.remove('header-categories__category-block_active')
        const categoryWrap = document.querySelector('[data-element="header-categories-category-wrap"]')
        categoryWrap.classList.remove('header-categories__category-wrap_active')
        categoryLayer.classList.remove('header-category-layer_active')
    }
}
