const subscriptionsMenu = document.getElementById('navmenu__subscriptions-id');
const subscriptionsMenuOptions = document.getElementById('subscriptions__options-id');
const subscriptionsTitle = document.getElementById('subscriptions__text');
const cinemaMenu = document.getElementById('navmenu__cinema-id');
const cinemaMenuOptions = document.getElementById('cinema__options-id');
const cinemaTitle = document.getElementById('cinema__text');

// Navbar Dropdowns Functionalities//

subscriptionsMenu.addEventListener('mouseover', () => {
    subscriptionsMenuOptions.style.display = 'block';
    subscriptionsTitle.style.color = '#ffe300';
}, false);

subscriptionsMenu.addEventListener('mouseout', () => {
    subscriptionsMenuOptions.style.display = 'none';
    subscriptionsTitle.style.color = '#fff';
})

subscriptionsMenuOptions.addEventListener('mouseover', () => {
    subscriptionsTitle.style.color = '#ffe300';
}, false);

subscriptionsMenuOptions.addEventListener('mouseout', () => {
    subscriptionsMenuOptions.style.display = 'none';
    subscriptionsTitle.style.color = '#fff';
}, false);

