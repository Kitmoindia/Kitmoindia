document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menuList = document.getElementById('menu-list');

    menuButton.addEventListener('click', function () {
        menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!menuButton.contains(event.target) && !menuList.contains(event.target)) {
            menuList.style.display = 'none';
        }
    });
});
