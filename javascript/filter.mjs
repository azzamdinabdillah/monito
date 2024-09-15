const filterMobileDrawerElement = document.querySelector('.filter-drawer');
const btnOpenFilterMobile = document.querySelector('.btn-filter-mobile');
const btnCloseFilterMobile = document.querySelector('.btn-close-drawer');

export const mobileFilterElementHandle = () => {
    btnOpenFilterMobile.onclick = () => {
        filterMobileDrawerElement.classList.add('open');
        filterMobileDrawerElement.classList.remove('close');
        document.body.style.overflow = 'hidden';
    }

    btnCloseFilterMobile.onclick = () => {
        filterMobileDrawerElement.classList.remove('open')
        filterMobileDrawerElement.classList.add('close')
        document.body.style.overflow = 'auto';
    }
}
