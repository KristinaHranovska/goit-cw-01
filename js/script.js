 $(document).ready(function () {
        const productsList = $('.products-list');

        productsList.on('afterChange', function (event, slick, currentSlide) {
          const dots = $('.product-slider-dots li');
          dots.removeClass('active');
          dots.eq(currentSlide).addClass('active');
        });

        productsList.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: '.swiper-button-next',
          prevArrow: '.swiper-button-prev',
          autoplay: true, // Додано автопрокрутку
          autoplaySpeed: 3000, // Інтервал автопрокрутки у мілісекундах (1 секунда = 1000 мілісекунд)
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
          ],
        });

        const dots = $('.product-slider-dots li');

        dots.on('click', function () {
          const index = $(this).index();
          productsList.slick('slickGoTo', index);
        });
 });
      

  $(document).ready(function () {
        const feedbackList = $('.feedback-list');

        feedbackList.on('afterChange', function (event, slick, currentSlide) {
          const dots = $('.feedback-slider-dots li');
          dots.removeClass('active');
          dots.eq(currentSlide).addClass('active');
        });

        feedbackList.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: '.swiper-feedback-button-next',
          prevArrow: '.swiper-feedback-button-prev',
          autoplay: true, // Додано автопрокрутку
          autoplaySpeed: 3000, // Інтервал автопрокрутки у мілісекундах (1 секунда = 1000 мілісекунд)
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
          ],
        });

        const dots = $('.feedback-slider-dots li');

        dots.on('click', function () {
          const index = $(this).index();
          feedbackList.slick('slickGoTo', index);
        });
      });