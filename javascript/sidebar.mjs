const btnOpenNavElement = document.querySelector('.btn-open-nav');
const btnCloseNavElement = document.querySelector('.btn-close-navbar');
const navElement = document.querySelector('.header-mobile .left nav');
const navElementContent = document.querySelector('.header-mobile .left nav .content');
const headerDesktop = document.querySelector('.header-desktop');

export const sideBarHandle = () => {
    btnOpenNavElement.onclick = () => {
        navElement.classList.add('open');
        navElement.classList.remove('close');
        document.body.style.overflow = 'hidden';
    }
    
    btnCloseNavElement.onclick = () => {
        navElement.classList.add('close');
        
        navElement.addEventListener('animationend', function animNav(){
            navElement.classList.remove('open');
            navElement.removeEventListener('animationend', animNav);
        });

        navElementContent.addEventListener('animationend', function animNavContent(){
            navElementContent.removeEventListener('animationend', animNavContent);
        });

        document.body.style.overflow = 'auto';
    }
}

// append navbar desktop to mobile
// navElement.querySelector('.content').innerHTML = headerDesktop.innerHTML;