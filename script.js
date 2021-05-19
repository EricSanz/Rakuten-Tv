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
let scrollTranslationGratis = 0;


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

// Horizontal Scroll //

const scrollingRightBanners = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 800) {
        scrollTranslation -= 13;
        if (scrollTranslation === -52) {
            document.getElementById('right__arrow-banners').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 800 && window.innerWidth >= 670) {
        scrollTranslation -= 20;
        if (scrollTranslation === -40) {
            document.getElementById('right__arrow-banners').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslation -= 22;
        if (scrollTranslation === -44) {
            document.getElementById('right__arrow-banners').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 440) {
        scrollTranslation -= 23;
        if (scrollTranslation === -69) {
            document.getElementById('right__arrow-banners').style.visibility = "hidden";
        }
    } else if (window.innerWidth >= 1260) {
        scrollTranslation -= 15;
        if (scrollTranslation === -15) {
            document.getElementById('right__arrow-banners').style.visibility = "hidden";
        }
    } else {
        scrollTranslation -= 20;
        if (scrollTranslation === -20) {
            document.getElementById('right__arrow-banners').style.visibility = "hidden";
        }
    }
    document.getElementById('left__arrow-banners').style.visibility = "visible";
    document.getElementById('scroll__list').style.transform = `translateX(${scrollTranslation}%)`;
}

const scrollingLeftBanners = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 800) {
        scrollTranslation += 13;
        scrollTranslation = +scrollTranslation;
    } else if (window.innerWidth < 800 && window.innerWidth >= 670) {
        scrollTranslation += 20;
        scrollTranslation = +scrollTranslation;
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslation += 22;
        scrollTranslation = +scrollTranslation;
    } else if (window.innerWidth < 400) {
        scrollTranslation += 23;
        scrollTranslation = +scrollTranslation;
    } else if (window.innerWidth >= 1260) {
        scrollTranslation += 15;
        scrollTranslation = +scrollTranslation;
    } else {
        scrollTranslation += 20;
        scrollTranslation = +scrollTranslation;
    }

    if(!scrollTranslation) {
        document.getElementById('left__arrow-banners').style.visibility = "hidden";
    }
    document.getElementById('right__arrow-banners').style.visibility = "visible";
    document.getElementById('scroll__list').style.transform = `translateX(${scrollTranslation}%)`;
}

// GRATIS SECTION //

const scrollingRightGratis = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 800) {
        scrollTranslationGratis -= 19;
        if (scrollTranslationGratis === -76) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 800 && window.innerWidth >= 670) {
        scrollTranslationGratis -= 20;
        if (scrollTranslationGratis === -80) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslationGratis -= 22;
        if (scrollTranslationGratis === -44) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 440) {
        scrollTranslationGratis -= 9;
        if (scrollTranslationGratis === -90) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else if (window.innerWidth >= 1260 && window.innerWidth < 1600) {
        scrollTranslationGratis -= 31;
        if (scrollTranslationGratis === -62) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else if (window.innerWidth >= 1600) {
        scrollTranslationGratis -= 27;
        if (scrollTranslationGratis === -54) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else {
        scrollTranslationGratis -= 24;
        if (scrollTranslationGratis === -72) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    }
    document.getElementById('left__arrow-gratis').style.visibility = "visible";
    document.getElementById('scroll__list-gratis').style.transform = `translateX(${scrollTranslationGratis}%)`;
}


const scrollingLeftGratis = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 800) {
        scrollTranslationGratis += 19;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else if (window.innerWidth < 800 && window.innerWidth >= 670) {
        scrollTranslationGratis += 20;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslationGratis += 22;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else if (window.innerWidth < 440) {
        scrollTranslationGratis += 9;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else if (window.innerWidth >= 1260 && window.innerWidth < 1600) {
        scrollTranslationGratis += 31;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else if (window.innerWidth >= 1600) {
        scrollTranslationGratis += 27;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else {
        scrollTranslationGratis += 24;
        scrollTranslationGratis = +scrollTranslationGratis;
    }

    if(!scrollTranslationGratis) {
        document.getElementById('left__arrow-gratis').style.visibility = "hidden";
    }
    document.getElementById('right__arrow-gratis').style.visibility = "visible";
    document.getElementById('scroll__list-gratis').style.transform = `translateX(${scrollTranslationGratis}%)`;
}