//JS
const menuToggler = document.querySelector(".menu-toggler");
const navbar = document.querySelector(".navbar");
var collapsibleMenu = document.querySelector(".collapsible-menu");
const animatedCard = document.querySelector(".animated-card");
var animatedTextGroup = document.querySelector(".animated-text-group");
collapsibleMenu.style.display = "none";

// !! COLLAPSIBLE MENU !!
if (window.innerWidth > 992) {
  collapsibleMenu.style.display = "flex";
  navbar.classList.toggle("show-menu");
}

// !! MENU TOGGLER  !!
menuToggler.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
  if (navbar.classList.contains("show-menu")) {
    collapsibleMenu.style.display = "flex";
    collapsibleMenu.style.maxHeight = collapsibleMenu.scrollHeight + "px";
    collapsibleMenu.style.overflow = "visible";
    setTimeout(() => {
      collapsibleMenu.style.overflow = "visible";
    }, 300);
  } else {
    collapsibleMenu.style.maxHeight = 0;
    collapsibleMenu.style.transition = "max-height 0.5s ease-in-out";
    collapsibleMenu.style.overflow = "hidden";
  }
});

// !! ANIMATED CARDS ANIMATIONS !!

function animateOnScroll() {
  if (animatedCard.getBoundingClientRect().top < window.innerHeight * 0.99) {
    animatedCard.classList.add("fadeInTop");
    window.removeEventListener("scroll", animateOnScroll);
  }
}

window.addEventListener("scroll", animateOnScroll);

// !@!
