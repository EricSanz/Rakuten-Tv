const subscriptionsMenu = document.getElementById('navmenu__subscriptions-id');
const subscriptionsMenuOptions = document.getElementById('subscriptions__options-id');
const subscriptionsTitle = document.getElementById('subscriptions__text');
const cinemaMenu = document.getElementById('navmenu__cinema-id');
const cinemaMenuOptions = document.getElementById('cinema__options-id');
const cinemaTitle = document.getElementById('cinema__text');

// Navbar Desktop Dropdowns Functionalities//

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