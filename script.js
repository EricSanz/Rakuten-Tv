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
let scrollTranslationCinema = 0;
let scrollTranslationStories = 0;


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
        scrollTranslationGratis -= 14;
        if (scrollTranslationGratis === -84) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslationGratis -= 22;
        if (scrollTranslationGratis === -44) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 440) {
        scrollTranslationGratis -= 7;
        if (scrollTranslationGratis === -91) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else if (window.innerWidth >= 1260 && window.innerWidth < 1600) {
        scrollTranslationGratis -= 33;
        if (scrollTranslationGratis === -66) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else if (window.innerWidth >= 1600) {
        scrollTranslationGratis -= 30;
        if (scrollTranslationGratis === -60) {
            document.getElementById('right__arrow-gratis').style.visibility = "hidden";
        }
    } else {
        scrollTranslationGratis -= 19;
        if (scrollTranslationGratis === -76) {
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
        scrollTranslationGratis += 14;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslationGratis += 22;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else if (window.innerWidth < 440) {
        scrollTranslationGratis += 7;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else if (window.innerWidth >= 1260 && window.innerWidth < 1600) {
        scrollTranslationGratis += 33;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else if (window.innerWidth >= 1600) {
        scrollTranslationGratis += 30;
        scrollTranslationGratis = +scrollTranslationGratis;
    } else {
        scrollTranslationGratis += 19;
        scrollTranslationGratis = +scrollTranslationGratis;
    }

    if(!scrollTranslationGratis) {
        document.getElementById('left__arrow-gratis').style.visibility = "hidden";
    }
    document.getElementById('right__arrow-gratis').style.visibility = "visible";
    document.getElementById('scroll__list-gratis').style.transform = `translateX(${scrollTranslationGratis}%)`;
}

// CINEMA SECTION //

const scrollingRightCinema = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 800) {
        scrollTranslationCinema -= 19;
        if (scrollTranslationCinema === -76) {
            document.getElementById('right__arrow-cinema').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 800 && window.innerWidth >= 670) {
        scrollTranslationCinema -= 14;
        if (scrollTranslationCinema === -84) {
            document.getElementById('right__arrow-cinema').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslationCinema -= 22;
        if (scrollTranslationCinema === -44) {
            document.getElementById('right__arrow-cinema').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 440) {
        scrollTranslationCinema -= 7;
        if (scrollTranslationCinema === -91) {
            document.getElementById('right__arrow-cinema').style.visibility = "hidden";
        }
    } else if (window.innerWidth >= 1260 && window.innerWidth < 1600) {
        scrollTranslationCinema -= 33;
        if (scrollTranslationCinema === -66) {
            document.getElementById('right__arrow-cinema').style.visibility = "hidden";
        }
    } else if (window.innerWidth >= 1600) {
        scrollTranslationCinema -= 30;
        if (scrollTranslationCinema === -60) {
            document.getElementById('right__arrow-cinema').style.visibility = "hidden";
        }
    } else {
        scrollTranslationCinema -= 19;
        if (scrollTranslationCinema === -76) {
            document.getElementById('right__arrow-cinema').style.visibility = "hidden";
        }
    }
    document.getElementById('left__arrow-cinema').style.visibility = "visible";
    document.getElementById('scroll__list-cinema').style.transform = `translateX(${scrollTranslationCinema}%)`;
}

const scrollingLeftCinema = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 800) {
        scrollTranslationCinema += 19;
        scrollTranslationCinema = +scrollTranslationCinema;
    } else if (window.innerWidth < 800 && window.innerWidth >= 670) {
        scrollTranslationCinema += 14;
        scrollTranslationCinema = +scrollTranslationCinema;
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslationCinema += 22;
        scrollTranslationCinema = +scrollTranslationCinema;
    } else if (window.innerWidth < 440) {
        scrollTranslationCinema += 7;
        scrollTranslationCinema = +scrollTranslationCinema;
    } else if (window.innerWidth >= 1260 && window.innerWidth < 1600) {
        scrollTranslationCinema += 33;
        scrollTranslationCinema = +scrollTranslationCinema;
    } else if (window.innerWidth >= 1600) {
        scrollTranslationCinema += 30;
        scrollTranslationCinema = +scrollTranslationCinema;
    } else {
        scrollTranslationCinema += 19;
        scrollTranslationCinema = +scrollTranslationCinema;
    }

    if(!scrollTranslationCinema) {
        document.getElementById('left__arrow-cinema').style.visibility = "hidden";
    }
    document.getElementById('right__arrow-cinema').style.visibility = "visible";
    document.getElementById('scroll__list-cinema').style.transform = `translateX(${scrollTranslationCinema}%)`;
}

// STORIES SECTION //

const scrollingRightStories = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 800) {
        scrollTranslationStories -= 19;
        if (scrollTranslationStories === -76) {
            document.getElementById('right__arrow-stories').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 800 && window.innerWidth >= 670) {
        scrollTranslationStories -= 14;
        if (scrollTranslationStories === -84) {
            document.getElementById('right__arrow-stories').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslationStories -= 22;
        if (scrollTranslationStories === -44) {
            document.getElementById('right__arrow-stories').style.visibility = "hidden";
        }
    } else if (window.innerWidth < 440) {
        scrollTranslationStories -= 7;
        if (scrollTranslationStories === -91) {
            document.getElementById('right__arrow-stories').style.visibility = "hidden";
        }
    } else if (window.innerWidth >= 1260 && window.innerWidth < 1600) {
        scrollTranslationStories -= 33;
        if (scrollTranslationStories === -66) {
            document.getElementById('right__arrow-stories').style.visibility = "hidden";
        }
    } else if (window.innerWidth >= 1600) {
        scrollTranslationStories -= 30;
        if (scrollTranslationStories === -60) {
            document.getElementById('right__arrow-stories').style.visibility = "hidden";
        }
    } else {
        scrollTranslationStories -= 19;
        if (scrollTranslationStories === -76) {
            document.getElementById('right__arrow-stories').style.visibility = "hidden";
        }
    }
    document.getElementById('left__arrow-stories').style.visibility = "visible";
    document.getElementById('scroll__list-stories').style.transform = `translateX(${scrollTranslationStories}%)`;
}

const scrollingLeftStories = () => {
    if (window.innerWidth < 1024 && window.innerWidth >= 800) {
        scrollTranslationStories += 19;
        scrollTranslationStories = +scrollTranslationStories;
    } else if (window.innerWidth < 800 && window.innerWidth >= 670) {
        scrollTranslationStories += 14;
        scrollTranslationStories = +scrollTranslationStories;
    } else if (window.innerWidth < 670 && window.innerWidth >= 440) {
        scrollTranslationStories += 22;
        scrollTranslationStories = +scrollTranslationStories;
    } else if (window.innerWidth < 440) {
        scrollTranslationStories += 7;
        scrollTranslationStories = +scrollTranslationStories;
    } else if (window.innerWidth >= 1260 && window.innerWidth < 1600) {
        scrollTranslationStories += 33;
        scrollTranslationStories = +scrollTranslationStories;
    } else if (window.innerWidth >= 1600) {
        scrollTranslationStories += 30;
        scrollTranslationStories = +scrollTranslationStories;
    } else {
        scrollTranslationStories += 19;
        scrollTranslationStories = +scrollTranslationStories;
    }

    if(!scrollTranslationStories) {
        document.getElementById('left__arrow-stories').style.visibility = "hidden";
    }
    document.getElementById('right__arrow-stories').style.visibility = "visible";
    document.getElementById('scroll__list-stories').style.transform = `translateX(${scrollTranslationStories}%)`;
}