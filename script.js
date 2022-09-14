let burger = document.querySelector('.burger');
let menu = document.querySelector('.burger-menu');
let close = document.querySelector('.close');
let sideMenu = document.querySelector('.side-menu');
let arrow = document.querySelector('.arrow');
let skills = document.querySelector('.skills-container');
let slideIndex = 1;


burger.addEventListener('click', function () {
  menu.style.display = 'block';
  burger.style.display = 'none';
});

close.addEventListener('click', function () {
  menu.style.display = 'none';
  burger.style.display = 'block';
});

menu.addEventListener('click', function () {
  menu.style.display = 'none';
  burger.style.display = 'block';
}
);

sideMenu.addEventListener('mouseenter', function () {
  sideMenu.style.left = '0';
});
sideMenu.addEventListener('mouseleave', function () {
  sideMenu.style.left = '-8rem';
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    arrow.style.display = 'flex';
  } else {
    arrow.style.display = 'none';
  }
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    skills.style.visibility = 'visible';
    skills.style.animation = "fade 3s ease-in-out";
  }
});

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "flex"; 
}