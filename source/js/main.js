// главный блок с фоном
if ($(".main-info").hasClass("bg")) {
  $('.header').addClass('bg');
}

// [index page]
// якорь на main-info
$(document).ready(function(){
  $(".main-info__btn-bottom" ).on("click", function () {
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});

// карусель заголовка
$(document).ready(function () {
  $('#main-info-marquee').marquee({
    duration: 10000,       // время на прохождение
    // startVisible: true, // заполненный текст
    // duplicated: true    // дублировать
  });
});

// слайдер программы
$(document).ready(function () {
  var programSwiperMain = new Swiper('#program-swiper', {
    slidesPerView: 3.5,
    slidesOffsetBefore: 280,
    spaceBetween: 32,

    loop: true,
    centeredSlides: true,

    breakpoints: {
      1921: {
        slidesPerView: 3,
        slidesOffsetBefore: 0,
      },
      1920: {
        slidesOffsetBefore: 280,
      },
      1700: {
        slidesOffsetBefore: 240,
      },
      1600: {
        slidesOffsetBefore: 220,
      },
      1500: {
        slidesOffsetBefore: 200,
      },
      1400: {
        slidesOffsetBefore: 180,
      },
      1300: {
        slidesOffsetBefore: 160,
      },
      1200: {
        slidesOffsetBefore: 150,
        spaceBetween: 26,
      },
      1100: {
        slidesOffsetBefore: 140,
        spaceBetween: 24,
      },
      1000: {
        slidesOffsetBefore: 130,
        spaceBetween: 22,
      },
      900: {
        slidesOffsetBefore: 120,
      },
      800: {
        slidesOffsetBefore: 110,
        spaceBetween: 20,
      },
    },

    pagination: {
      el: '.program-progressbar',
      type: 'progressbar'
    }
  });

  var programSwiperPagination = new Swiper('#program-swiper-pagination', {
    slidesPerView: 3.5,
    slidesOffsetBefore: 280,
    spaceBetween: 32,

    loop: true,
    centeredSlides: true,

    breakpoints: {
      1921: {
        slidesPerView: 3,
        slidesOffsetBefore: 35,
      },
      1920: {
        slidesOffsetBefore: 280,
      },
      1700: {
        slidesOffsetBefore: 240,
      },
      1600: {
        slidesOffsetBefore: 220,
      },
      1500: {
        slidesOffsetBefore: 200,
      },
      1400: {
        slidesOffsetBefore: 180,
      },
      1300: {
        slidesOffsetBefore: 160,
      },
      1200: {
        slidesOffsetBefore: 150,
        spaceBetween: 26,
      },
      1100: {
        slidesOffsetBefore: 140,
        spaceBetween: 24,
      },
      1000: {
        slidesOffsetBefore: 130,
        spaceBetween: 22,
      },
      900: {
        slidesOffsetBefore: 120,
      },
      800: {
        slidesOffsetBefore: 110,
        spaceBetween: 20,
      },
    },

    pagination: {
      el: '.program-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
  });

  programSwiperMain.controller.control = programSwiperPagination;
  programSwiperPagination.controller.control = programSwiperMain;
});


// слайдер центров
$(document).ready(function () {
  var mySwiper = new Swiper('#center-swiper', {
    slidesPerView: '1.5',
    // centeredSlides: true,
    speed: 3000,
    spaceBetween: 25,
    touchRatio: 1,
    loop: true,
    freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      756: {
        slidesPerView: '3',
        spaceBetween: 30,
        // loop: true
      }
    }
  });
});
