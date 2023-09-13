  // script to make a modal window appear
  (() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// script to make a review window appear
  
  (() => {
  const refs = {
    openReviewBtn: document.querySelector("[data-review-open]"),
    closeReviewBtn: document.querySelector("[data-review-close]"),
    review: document.querySelector("[data-review]"),
  };

  refs.openReviewBtn.addEventListener("click", toggleReview);
  refs.closeReviewBtn.addEventListener("click", toggleReview);

  function toggleReview() {
    refs.review.classList.toggle("is-hidden");
  }
})();

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector('.submit-form-review');
    var form = document.querySelector('.form-review');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Цей рядок запобігає стандартній поведінці кнопки submit
        // Тут можна додатковий код для обробки форми, якщо потрібно
    });

});

// up arrow settings

document.addEventListener('DOMContentLoaded', function() {
    var upButton = document.querySelector('.up-btn');

    upButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        document.body.classList.add('scrolling');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            upButton.classList.add('show');
        } else {
            upButton.classList.remove('show');
        }

        if (document.body.classList.contains('scrolling') && window.scrollY === 0) {
            document.body.classList.remove('scrolling');
        }
    });
});

