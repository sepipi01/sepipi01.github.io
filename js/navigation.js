const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navbar');
const menuLabel = menuToggle?.querySelector('.sr-only');

function setMenuState(isOpen) {
    if (!menuToggle || !navigation) return;

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    navigation.classList.toggle('is-open', isOpen);

    if (menuLabel) {
        menuLabel.textContent = isOpen
            ? 'Close navigation menu'
            : 'Open navigation menu';
    }
}

menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
});

navigation?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuState(false);
});

document.addEventListener('click', (event) => {
    const clickedInsideHeader = event.target.closest('header');
    if (!clickedInsideHeader) setMenuState(false);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuState(false);
        menuToggle?.focus();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenuState(false);
});
