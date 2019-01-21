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



/* SLIDER LIMITED EDITION */
var limitedEdition = document.getElementById('limited-edition');

var swapImages = function (coffeeType) {
  var slides = coffeeType.querySelector('#slider-swap');
  var slidesLength = slides.querySelectorAll('li').length;
  var leftArrow = coffeeType.querySelector('#left-arrow');
  var rightArrow = coffeeType.querySelector('#right-arrow');

  rightArrow.addEventListener('click', function () {
    slides.appendChild(slides.querySelector('li'));
  });

  leftArrow.addEventListener('click', function (){
      slides.prepend(slides.querySelectorAll('li')[slidesLength - 1]);
  });


};

swapImages(limitedEdition);


/* SLIDER DESCRIPTION */

var original = document.getElementById('original');
var vertuo = document.getElementById('vertuo');
var limitedEdition = document.getElementById('limited-edition');

// les paramètres d'une fonction n'existent que dans la fonction. --> utiliser return pour sauvegarder les valeurs de la fonction si on doit les utiliser en dehors.
// ATTENTION: on a droit qu'à une seule valeur dans return --> si on a besoin de plusieurs valeurs, faire un tableau dans return
// ex: return = {index: index, slider: slider}

// écrire var ou juste function directement c'est pareil

var moveImages = function (coffeeType) {
  var slides = coffeeType.querySelector('#slides');
  var leftArrow = coffeeType.querySelector('#left-arrow');
  var rightArrow = coffeeType.querySelector('#right-arrow');
  var sliderWidth = slides.offsetWidth;
  var index = 0;
  slides.appendChild(slides.querySelector('li').cloneNode(slides.querySelector('img')));
  var slidesLength = slides.querySelectorAll('li').length;

  rightArrow.addEventListener('click', function() {
    if (index < slidesLength - 1) {
      index++;
      slides.style.transform = "translateX(" + index * sliderWidth * -1 + "px)";
    }

    if (index === slidesLength - 1) {
      index = 0;
      slides.style.transform = "translateX(" + index * sliderWidth * -1 + "px)";
    }
  });

  leftArrow.addEventListener('click', function() {

    if (index > 0) {
      index--;
      slides.style.transform = "translateX(" + index * sliderWidth * -1 + "px)";
    }

    else {
      if (index === 0) {
        index = slidesLength - 2;
        slides.style.transform = "translateX(" + index * sliderWidth * -1 + "px)";
      }
    }
  });
} ;

moveImages(original);
moveImages(vertuo);
moveImages(limitedEdition);


























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
