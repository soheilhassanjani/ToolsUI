let hamburger = document.querySelector(".hamburger");
let hamToggler = document.querySelectorAll("[ham-toggler]");
hamToggler.forEach(each => each.addEventListener("click", fooHamToggler));

function fooHamToggler() {
    hamburger.classList.toggle("hamburger--visible");
}