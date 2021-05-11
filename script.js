const subscriptionsMenu = document.getElementById('navmenu__subscriptions-id');
const subscriptionsMenuOptions = document.getElementById('subscriptions__options-id');
const subscriptionsTitle = document.getElementById('subscriptions__text');

subscriptionsMenu.addEventListener('mouseover', () => {
    subscriptionsMenuOptions.style.display = 'block';
    subscriptionsTitle.style.color = '#ffe300';
}, false);

subscriptionsMenuOptions.addEventListener('mouseover', () => {
    subscriptionsTitle.style.color = '#ffe300';
}, false);

subscriptionsMenuOptions.addEventListener('mouseout', () => {
    subscriptionsMenuOptions.style.display = 'none';
    subscriptionsTitle.style.color = '#fff';
}, false);