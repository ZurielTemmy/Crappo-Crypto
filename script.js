hamburger = document.querySelector('.hamburger')

hamburger.onclick = function () {
    links = document.querySelector('.links')
    links.classList.toggle('active');
}