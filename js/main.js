gsap.to(".home-image", {
    x: 200,
    duration: 1 // Optional: set how long the animation takes in seconds
  });
  

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
