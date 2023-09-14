// //script to make a buy now window appear
//     (() => {
//   const refs = {
//     openBuyBtn: document.querySelector("[data-buy-open]"),
//     openBuyAddBtn: document.querySelector("[data-buy-add-open]"),
//     closeBuyBtn: document.querySelector("[data-buy-close]"),
//     buy: document.querySelector("[data-buy]"),
//   };

//   refs.openBuyBtn.addEventListener("click", toggleModal);
//   refs.openBuyAddBtn.addEventListener("click", toggleModal);
//   refs.closeBuyBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.buy.classList.toggle("is-hidden");
//   }
// })();

// // preventing standard behavior (window closing + refresh)
// document.addEventListener('DOMContentLoaded', function() {
//     var submitButton = document.querySelector('.submit-form-buy');
//     var form = document.querySelector('.form-buy');

//     submitButton.addEventListener('click', function(event) {
//         event.preventDefault(); // Цей рядок запобігає стандартній поведінці кнопки submit
//     });

// });


// // script to make a modal window appear
//   (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// // preventing standard behavior (window closing + refresh)
// document.addEventListener('DOMContentLoaded', function() {
//     var submitButton = document.querySelector('.submit-form-modal');
//     var form = document.querySelector('.form-modal');

//     submitButton.addEventListener('click', function(event) {
//         event.preventDefault(); // Цей рядок запобігає стандартній поведінці кнопки submit
//     });

// });


// // script to make a review window appear
//   (() => {
//   const refs = {
//     openReviewBtn: document.querySelector("[data-review-open]"),
//     closeReviewBtn: document.querySelector("[data-review-close]"),
//     review: document.querySelector("[data-review]"),
//   };

//   refs.openReviewBtn.addEventListener("click", toggleReview);
//   refs.closeReviewBtn.addEventListener("click", toggleReview);

//   function toggleReview() {
//     refs.review.classList.toggle("is-hidden");
//   }
// })();

// // preventing standard behavior (window closing + refresh)
// document.addEventListener('DOMContentLoaded', function() {
//     var submitButton = document.querySelector('.submit-form-review');
//     var form = document.querySelector('.form-review');

//     submitButton.addEventListener('click', function(event) {
//         event.preventDefault(); // Цей рядок запобігає стандартній поведінці кнопки submit
//     });

// });


// // up arrow settings
// document.addEventListener('DOMContentLoaded', function() {
//     var upButton = document.querySelector('.up-btn');

//     upButton.addEventListener('click', function() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });

//         document.body.classList.add('scrolling');
//     });

//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 300) {
//             upButton.classList.add('show');
//         } else {
//             upButton.classList.remove('show');
//         }

//         if (document.body.classList.contains('scrolling') && window.scrollY === 0) {
//             document.body.classList.remove('scrolling');
//         }
//     });
// });


// // блокування вводу букв в поле (тільки цифри)
// document.addEventListener('DOMContentLoaded', function() {
//     var cardInput = document.querySelector('.number-input[type="text"]');
//     cardInput.addEventListener('keydown', function(e) {
//         if (!/^\d+$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
//             e.preventDefault();
//         }
//     });
// });


// script to make a mobile-window appear
    (() => {
  const refs = {
    openBtn: document.querySelector("[data-burger-open]"),
    closeBtn: document.querySelector("[data-burger-close]"),
    burger: document.querySelector("[data-burger]"),
  };

  refs.openBtn.addEventListener("click", toggleModal);
  refs.closeBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.burger.classList.toggle("is-hidden");
  }
})();