'use strict'

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

const createDots = () => {
  slides.forEach((s, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = (dot) => {
  const dots = document.querySelectorAll(".dots__dot");
  dots.forEach((d) => d.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${dot}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

dotContainer.addEventListener("click", (e) => {
  console.log(e.target);
  // 1.
  // if (e.target.classList.contains('dots__dot')) {

  // 2.
  // If we need to do more complex matching, we can use MATCHES instead, which tests if a certain element WOULD BE selected by a certain selector. The selector has the exact same form as in querySelector or in CSS

  // TODO classList NOT necessary?!
  if (e.target.matches(".dots__dot")) {
    const { slide } = e.target.dataset; // Destructuring
    goToSlide(slide);
    activateDot(slide);
  }
});

// Go to next slide every 10 seconds
// setInterval(nextSlide, 10000);

const init = () => {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

// FOR MOBILE MENU
// closeam
// function close(){
//   overlay.style.display="none";
//   mobileMenu.style.width= "0";
// }

// closing the menu through the overlay
// overlay.addEventListener("click", function(){
  // mobileMenu.style.width= "0";
  // overlay.style.display="none";
// })
// overlay.addEventListener("click", close());
// i will call this function
// function showMenu(){
//   mobileMenu.style.width= "50%";
//   alert("Good")

// }
let mobileIconClose = document.querySelector(".mobile-close-icon");
let mobileMenu = document.querySelector(".for-mobile-menu");
let overlay = document.querySelector(".overlay");
let mobileMenuCon = document.querySelector(".mobile-menu-con");
let mobileKids = document.querySelector(".menu-kids");

// to show the menu
mobileMenuCon.addEventListener("click",function(){
  // alert("God ooo");
  mobileMenu.style.width= "50%";
  overlay.style.display="block";
  mobileKids.style.display="block";
} );

// TO CLOSE THROUGH CLOSE ICON
mobileIconClose.addEventListener("click", function(){
  mobileMenu.style.width= "0%";
  mobileMenu.style.transition= "0.3s";
  overlay.style.display="none";
  mobileKids.style.display="none";
})
overlay.addEventListener("click",function(){
  mobileMenu.style.width= "0%";
  mobileMenu.style.transition= "0.3s";
  overlay.style.display="none";
  mobileKids.style.display="none";
})
// This will close the mobile menu automatically if the screen width is above 1001px
window.addEventListener("resize", function(){
  if (window.innerWidth > 1001) {
    // Code to execute when the window width is above 1001px
    mobileKids.style.display="none";
    overlay.style.display="none";
    mobileMenu.style.width= "0%";
  }
 
})
// When the mobile menu is clicked this code with will close it
const links = document.querySelectorAll('.menu-kids a');
links.forEach(link => {
  link.addEventListener('click', () => {

    mobileMenu.style.width= "0%";
  mobileMenu.style.transition= "0.3s";
  overlay.style.display="none";
  mobileKids.style.display="none";
    
  });
});

closeMobileMenuWhenClicked.addEventListener("click", function(){
  
})
// FOR THE STICKY NAV

let section1 = document.querySelector(".approve-section");
let header = document.getElementsByTagName("header")[0];
const initialCoords = section1.getBoundingClientRect();
window.addEventListener("scroll", function(){
  if(window.pageYOffset > initialCoords.top){
    header.classList.add("sticky");
  }else{
    header.classList.remove("sticky");
  }
});
// let section1 = document.querySelector(".approve-section");
// let header = document.querySelector(".ok");
// const initialCoords = section1.getBoundingClientRect()
// window.addEventListener("scroll", function(){
//   if(window.scrollY > initialCoords.top){
//     header.classList.add("sticky");
//   }else{
//     header.classList.remove("sticky");
//   }
// })
