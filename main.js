
/* Фильтр на мобильный устроствах */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sideBar');

// Клик по кнопке для скрытия / показа фильтра и изменения исконки
sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

/* Показать еще 3 карточки */
const btnShowMoreCards = document.querySelector('.btn-show-more');
const hiddenCards = document.querySelectorAll('.hidden-cards');

// Клик по кнопке и показ трех скрытых карточек
btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('hidden-cards');
    })
})

