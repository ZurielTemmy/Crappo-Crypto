const togglebtn = document.getElementsByClassName('toggle-btn')[0]
const navbar = document.getElementsByClassName('links')[0]

togglebtn.addEventListener('click', () => {

    navbar.classList.toggle('active')
})