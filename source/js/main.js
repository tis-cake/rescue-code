var width = $(window).width();

// главный блок с фоном
if ($(".main-info").hasClass("bg")) {
  $('.header').addClass('bg');
}

// мобильное меню
$(document).ready(function () {
  $('.header__menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $('.nav-section').toggleClass('active');
    $("body").toggleClass('noscroll'); // отключить если нет js и
    // height: 100vh; @a
    // overflow-y: scroll;
    // overflow-x: hidden;
  });
});

// [index page]
// заголовок h1 в main-info
if (width <= 755) {
  $('.main-info__title.visually-hidden').removeClass('visually-hidden');
}

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
  if (width > 755) {
    $('#main-info-marquee').marquee({
      duration: 20000,       // время на прохождение
      startVisible: true,    // заполненный текст
      duplicated: true       // дублировать
    });
  }
});

// слайдер программы
$(document).ready(function () {
  var programSwiperMain = new Swiper('#program-swiper', {
    // slidesPerView: 2,
    // slidesOffsetBefore: 0,
    // spaceBetween: 20,

    slidesPerView: 3.5,
    // slidesPerView: 3,
    // slidesOffsetBefore: 120,
    spaceBetween: 32,

    loop: true,
    centeredSlides: true,

    breakpoints: {
      1921: {
        slidesPerView: 3,
        slidesOffsetBefore: 0,
      },
      1920: {
        // slidesOffsetBefore: 280,
      },
      1700: {
        // slidesOffsetBefore: 240,
      },
      1600: {
        // slidesOffsetBefore: 220,
      },
      1500: {
        // slidesOffsetBefore: 200,
      },
      1400: {
        // slidesOffsetBefore: 180,
      },
      1300: {
        // slidesOffsetBefore: 160,
      },
      1200: {
        // slidesOffsetBefore: 150,
        // spaceBetween: 26,
      },
      1100: {
        // slidesOffsetBefore: 140,
        // spaceBetween: 24,
      },
      1000: {
        // slidesOffsetBefore: 130,
        // spaceBetween: 22,
      },
      900: {
        // slidesOffsetBefore: 120,
      },
      800: {
        slidesPerView: 3.5,
        // slidesOffsetBefore: 110,
        // spaceBetween: 20,
      },
      300: {
        slidesPerView: 2,
        slidesOffsetBefore: 0,
        spaceBetween: 20,
      }
    },

    pagination: {
      el: '.program-progressbar',
      type: 'progressbar'
    }
  });

  var programSwiperPagination = new Swiper('#program-swiper-pagination', {
    // slidesPerView: 2,
    // slidesOffsetBefore: 0,
    // spaceBetween: 20,

    slidesPerView: 3.5,
    // slidesPerView: 3,
    // slidesOffsetBefore: 120,
    spaceBetween: 32,

    loop: true,
    centeredSlides: true,

    breakpoints: {
      1921: {
        slidesPerView: 3,
        slidesOffsetBefore: 0,
      },
      1920: {
        // slidesOffsetBefore: 280,
      },
      1700: {
        // slidesOffsetBefore: 240,
      },
      1600: {
        // slidesOffsetBefore: 220,
      },
      1500: {
        // slidesOffsetBefore: 200,
      },
      1400: {
        // slidesOffsetBefore: 180,
      },
      1300: {
        // slidesOffsetBefore: 160,
      },
      1200: {
        // slidesOffsetBefore: 150,
        // spaceBetween: 26,
      },
      1100: {
        // slidesOffsetBefore: 140,
        // spaceBetween: 24,
      },
      1000: {
        // slidesOffsetBefore: 130,
        // spaceBetween: 22,
      },
      900: {
        // slidesOffsetBefore: 120,
      },
      800: {
        slidesPerView: 3.5,
        // slidesOffsetBefore: 110,
        // spaceBetween: 20,
      },
      300: {
        slidesPerView: 2,
        slidesOffsetBefore: 0,
        spaceBetween: 20,
      }
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
    spaceBetween: 30,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      756: {
        slidesPerView: '4',
        spaceBetween: 26,
      }
    }
  });
});

// слайдер клиник
$(document).ready(function () {
  var mySwiper = new Swiper('#clinic-swiper', {
    slidesPerView: '1.5',
    spaceBetween: 30,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      756: {
        slidesPerView: '4',
        spaceBetween: 26,
      }
    }
  });
});
