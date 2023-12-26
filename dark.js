const a = document.querySelector('a');
const hii = document.getElementsByClassName("hii");

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle-checkbox');

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});
console.log(a);
console.log(hii);