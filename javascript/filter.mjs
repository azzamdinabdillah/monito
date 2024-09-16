const filterMobileDrawerElement = document.querySelector('.filter-drawer');
const btnOpenFilterMobile = document.querySelector('.btn-filter-mobile');
const btnCloseFilterMobile = document.querySelector('.btn-close-drawer');
const filterSettingMobileElement = document.querySelector('.filter-settings-wrapper');
const filterSettingDesktopElement = document.querySelector('.dog-filter');
const contentFilterDrawerElement = document.querySelector('.content-drawer');

export const appendFilterDesktopToMobile = () => filterSettingMobileElement.innerHTML = filterSettingDesktopElement.innerHTML;

export const mobileFilterElementHandle = () => {
    btnOpenFilterMobile.onclick = () => {
        filterMobileDrawerElement.classList.add('open');
        filterMobileDrawerElement.classList.remove('close');
        document.body.style.overflow = 'hidden';
    }

    btnCloseFilterMobile.onclick = () => {
        filterMobileDrawerElement.classList.add('close')
        
        filterMobileDrawerElement.addEventListener('animationend', function animFilter() {
            filterMobileDrawerElement.classList.remove('open')
            filterMobileDrawerElement.removeEventListener('animationend', animFilter);
        })

        contentFilterDrawerElement.addEventListener('animationend', function animFilterContent() {
            contentFilterDrawerElement.removeEventListener('animationend', animFilterContent);
        })

        document.body.style.overflow = 'auto';
    }
}
