const subscriptionsMenu = document.getElementById('navmenu__subscriptions-id');
const subscriptionsMenuOptions = document.getElementById('subscriptions__options-id');
const subscriptionsTitle = document.getElementById('subscriptions__text');
const cinemaMenu = document.getElementById('navmenu__cinema-id');
const cinemaMenuOptions = document.getElementById('cinema__options-id');
const cinemaTitle = document.getElementById('cinema__text');
const searchButton = document.getElementById('search__button-id');
const searchContainer = document.getElementById('search__box-id');
const searchContainerClose = document.getElementById('search__box-close-id');
const navItems = document.getElementById('nav__items-id');
let scrollTranslation = 0;


// Search Button Functionalities //

searchButton.addEventListener('click', () => {
    searchContainer.style.transform = 'translateY(55px)';
    navItems.style.display = 'none';
}, false);

searchContainerClose.addEventListener('click', () => {
    searchContainer.style.transform = 'translateY(-55px)';
    navItems.style.display = 'flex';
}, false);

// Navbar Desktop Dropdowns Functionalities //

subscriptionsMenu.addEventListener('mouseover', () => {
    subscriptionsMenuOptions.style.display = 'block';
    subscriptionsTitle.style.color = '#ffe300';
}, false);

subscriptionsMenu.addEventListener('mouseout', () => {
    subscriptionsMenuOptions.style.display = 'none';
    subscriptionsTitle.style.color = '#fff';
}, false);

subscriptionsMenuOptions.addEventListener('mouseover', () => {
    subscriptionsTitle.style.color = '#ffe300';
}, false);

subscriptionsMenuOptions.addEventListener('mouseout', () => {
    subscriptionsMenuOptions.style.display = 'none';
    subscriptionsTitle.style.color = '#fff';
}, false);

cinemaMenu.addEventListener('mouseover', () => {
    cinemaMenuOptions.style.display = 'block';
    cinemaTitle.style.color = '#ffe300';
}, false);

cinemaMenu.addEventListener('mouseout', () => {
    cinemaMenuOptions.style.display = 'none';
    cinemaTitle.style.color = '#fff';
}, false);

cinemaMenuOptions.addEventListener('mouseover', () => {
    cinemaTitle.style.color = '#ffe300';
}, false);

cinemaMenuOptions.addEventListener('mouseout', () => {
    cinemaMenuOptions.style.display = 'none';
    cinemaTitle.style.color = '#fff';
}, false);

// HORIZONTAL SCROLL //

const scrollRight = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 800) {
        scrollTranslation -= 13;
        if (scrollTranslation === -52) {
            document.getElementById('right__arrow').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 800 && window.innerWidth >= 670) {
        scrollTranslation -= 20;
        if (scrollTranslation === -60) {
            document.getElementById('right__arrow').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslation -= 22;
        if (scrollTranslation === -66) {
            document.getElementById('right__arrow').style.visibility = "hidden";
        }
    } else {
        scrollTranslation -= 18;
        if (scrollTranslation === -72) {
            document.getElementById('right__arrow').style.visibility = "hidden";
        }
    }
    document.getElementById('left__arrow').style.visibility = "visible";
    document.getElementById('scroll__list').style.transform = `translateX(${scrollTranslation}%)`;
}