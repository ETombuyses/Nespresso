
/* OPEN BURGER MENU */
var navigationBar = document.querySelector('.header');
var burgerMenu = document.querySelector('.burgerMenu');

burgerMenu.addEventListener('click', function(){
  navigationBar.classList.toggle('is-open');
  burgerMenu.classList.toggle('is-open');
});

// /* PARALLAX EFFECT */
// var rellax = new Rellax('.banner__decoration--blackIntensoOriginal');
// var rellax = new Rellax('.banner__decoration--blackIntensoVertuo', {
//   center: true
// });


/* SLIDER LIMITED EDITION */
var limitedEdition = document.getElementById('limited-edition');

var swapImages = function (coffeeType) {
  var slides = coffeeType.querySelector('#slider-swap');
  var slidesLength = slides.querySelectorAll('li').length;
  var leftArrow = coffeeType.querySelector('#left-arrow');
  var rightArrow = coffeeType.querySelector('#right-arrow');

  rightArrow.addEventListener('click', function () {
    slides.style.opacity="0";
    slides.style.transition="opacity 0.5s";
    setTimeout(function () {
      slides.appendChild(slides.querySelector('li'));
      slides.style.opacity="1";
      slides.style.transition="opacity 0.8s";
    }, 500)
    
  });

  leftArrow.addEventListener('click', function (){
    slides.style.opacity="0";
    slides.style.transition="opacity 0.5s";
    setTimeout(function () {
      slides.prepend(slides.querySelectorAll('li')[slidesLength - 1]);
      slides.style.opacity="1";
      slides.style.transition="opacity 0.8s";
    }, 500)
  });

  /* MOVE SLIDER IMAGES ON CLICK */
  slides.querySelector('li:nth-child(3)').addEventListener('click', function () {
    var img = slides.querySelectorAll('img');
    slides.querySelector('li img').remove();
    slides.querySelector('li').appendChild(img[1]);
    slides.querySelector('li:nth-child(2)').appendChild(img[2]);
    slides.querySelector('li:nth-child(3)').appendChild(img[0]);
  });

  slides.querySelector('li').addEventListener('click', function () {
    var img = slides.querySelectorAll('img');
    slides.querySelector('li img').remove();
    slides.querySelector('li').appendChild(img[2]);
    slides.querySelector('li:nth-child(2)').appendChild(img[0]);
    slides.querySelector('li:nth-child(3)').appendChild(img[1]);
  });

};

swapImages(limitedEdition);


/* SLIDER DESCRIPTION */

var original = document.getElementById('original');
var vertuo = document.getElementById('vertuo');
var limitedEdition = document.getElementById('limited-edition');

var moveImages = function (coffeeType) {
  var slides = coffeeType.querySelector('#slides');
  var leftArrow = coffeeType.querySelector('#left-arrow');
  var rightArrow = coffeeType.querySelector('#right-arrow');
  var sliderWidth = slides.offsetWidth;
  var index = 0;
  slides.appendChild(slides.querySelector('li').cloneNode(slides.querySelector('img')));
  var slidesLength = slides.querySelectorAll('li').length;

  rightArrow.addEventListener('click', function() {
    slides.style.opacity="0";
    slides.style.transition="opacity 0.5s";
    setTimeout(function () {
      

      if (index < slidesLength - 1) {
        index++;
        slides.style.transform = "translateX(" + index * sliderWidth * -1 + "px)";
        slides.style.opacity="1";
        slides.style.transition="opacity 0.8s";
      }

      if (index === slidesLength - 1) {
        index = 0;
        slides.style.transform = "translateX(" + index * sliderWidth * -1 + "px)";
        slides.style.opacity="1";
        slides.style.transition="opacity 0.8s";
      }
    }, 500);
   
  });

  leftArrow.addEventListener('click', function() {
    setTimeout(function () {
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
    }, 500);
  });
} ;

moveImages(original);
moveImages(vertuo);
moveImages(limitedEdition);



/* INCREMENT CART ITEMS NUMBER*/

var cartItems = function() {
  var addCartButtons = document.querySelectorAll('.cartAdd__addButton');

  for (i = 0 ; i < addCartButtons.length; i++) {
    let button = addCartButtons[i];
    button.addEventListener('click', function() {
      let numberItems = Number(document.querySelector('.sideNav__cartItems').dataset.items);
      numberItems += 1;
      document.querySelector('.sideNav__cartItems').dataset.items = numberItems;
      document.querySelector('.sideNav__cartItems').innerHTML = numberItems;
    });
  }  
}

cartItems();




























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
