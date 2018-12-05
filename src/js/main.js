var navigationBar = document.querySelector('.header');
var burgerButton = document.querySelector('.burgerButton');
var burgerButton
var navigationTabs = document.querySelector('.navigation');
var navigationOthers = document.querySelector('.navigationOthers');

burgerButton.addEventListener('click', function(){
  navigationBar.classList.toggle('is-open');
  burgerButton.classList.toggle('is-open');
});



// var prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector('.header').style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
