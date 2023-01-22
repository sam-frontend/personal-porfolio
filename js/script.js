let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fas fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fas fa-times');
    header.classList.remove('active');
}

