const togglebtn = document.getElementsByClassName('toggle-btn')
const navbar = document.getElementsByClassName('links')

togglebtn.addEventListener('click', () => {

    navbar.classList.toggle('active')
})


