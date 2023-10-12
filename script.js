const navBar = document.querySelector('.show-menu')
const meuButton = document.querySelector('.menu-botton')

meuButton.addEventListener('click',() =>{
    navBar.classList.toggle('show-menu')
})