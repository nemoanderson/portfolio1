const hamburger = document.getElementById('hamburger')
const hamburgerList = document.getElementById('menu')

function toggleButton() {
  menu.classList.toggle('show') 
}

hamburger.addEventListener('click', toggleButton)