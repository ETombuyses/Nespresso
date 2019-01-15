var navigationBar = document.querySelector('.header');
var burgerButton = document.querySelector('.burgerButton');
var burgerButton
var navigationTabs = document.querySelector('.navigation');
var navigationOthers = document.querySelector('.navigationOthers');

burgerButton.addEventListener('click', function(){
  navigationBar.classList.toggle('is-open');
  burgerButton.classList.toggle('is-open');
});

// banner parrallax
var rellax = new Rellax('.banner__decoration--blackIntensoOriginal');

var rellax = new Rellax('.banner__decoration--blackIntensoVertuo', {
  center: true
});



// slider cpasules edition limitée

var arrowLeftLimitedEdition = document.getElementById('arrowLeft-sliderLimitedEdition');
var arrowRightLimitedEdition = document.getElementById('arrowRight-sliderLimitedEdition');
var imagesSliderLimitedEdition = document.querySelectorAll('.slider__slides--images li');
var sliderLimitedEdition = document.querySelector('.slider__slides--images');
var index = 0;

//tableau js où on change la position des li dans le tableau

// prepend = couper / coller l'élément du tableau sélecetionné au début de l'élément.

arrowLeftLimitedEdition.addEventListener('click', function () {
  if (index === 0) {
    sliderLimitedEdition.prepend(imagesSliderLimitedEdition[2]);
    index ++;
  }
  else if (index === 1) {
    sliderLimitedEdition.prepend(imagesSliderLimitedEdition[1]);
    index ++;
  }

  else if (index === 2) {
    sliderLimitedEdition.prepend(imagesSliderLimitedEdition[0]);
    index = 0;
  }
});

arrowRightLimitedEdition.addEventListener('click', function () {
  if (index === 0) {
    sliderLimitedEdition.append(imagesSliderLimitedEdition[0]);
    index = 2;
  }

  else if (index === 2) {
    sliderLimitedEdition.append(imagesSliderLimitedEdition[1]);
    index = 1;
  }

  else if (index === 1) {
    sliderLimitedEdition.append(imagesSliderLimitedEdition[2]);
    index = 0;
  }
});

  

//CAGE SLIDER TEST

// var slides = document.getElementById('slides');
// var arrowLeft = document.getElementById('arrow-left');
// var arrowRight = document.getElementById('arrow-right');
// var slideWidth = slides.offsetWidth;

// var index = 0;

// slides.appendChild(slides.querySelector('img').cloneNode()); // clone l'élément qu'on a désigné, ici  la première image, et on ajoute un enefant à slides
// var slidesLength = slides.querySelectorAll('img').length; // le faire après avoir cloné le premier élément


// function setSlidesPosition () {
//   slides.style.transform = "translateX(" + index * (slideWidth * - 1) + "px)"; // contre intuitif
// };

// arrowRight.addEventListener('click', function(){
//   next ();
// });


// function next () {
//   if (index < slidesLength - 1) {
//     index++;
//     setSlidesPosition();

//     if (index == slidesLength - 1) {
//       setTimeout(function () {
//         slides.style.transition = 'none';
//         index = 0;
//         setSlidesPosition();

//         window.requestAnimationFrame(function () { // faire la fonction quand on a fini d'animé la frame en cours
//           slides.style.transition = 'transform 0.3s';
//         });
//       }, 300);
      
//     }
//   }
// };

// function prev () {
//   if (index >= 0) {
//     if (index === 0) {
//       slides.style.transition = 'none';
//       index = slidesLength - 1;
//       setSlidesPosition();

//       window.requestAnimationFrame(function() {
//         slides.style.transition = 'transform 0.3s';
//       });
//     }
  
//     window.requestAnimationFrame(function() {
//       index--;
//       setSlidesPosition();
//     });
//   }
// }


// arrowLeft.addEventListener('click', function() {
//   prev ();
// });

// // rendre le slider navigable avec les flèches pour accessibilité
// window.addEventListener('keydown', function() {
//   console.log(event); // nous montre ce sur quoi on a appuyé. regarder à KEY
//   switch (event.key) {
//     case 'ArrowRight' : 
//     next (); 
//     break;
//     case 'ArrowLeft' : 
//     prev ();
//     break;
//     default: // 
//     break;
//   }
// } );






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
