// главный блок с фоном
if ($(".main-info").hasClass("bg")) {
  $('.header').addClass('bg');
}

// [index page]
// карусель заголовка
// $(document).ready(function () {
  // var mySwiper = new Swiper('#main-title-swiper', {
  //   slidesPerView: '0.1',
  //   centeredSlides: true,
  //   speed: 3000,
  //   spaceBetween: 55,
  //   touchRatio: 1,
  //   loop: true,
  //   freeMode: true,
  //   // autoplay: {
  //   //   delay: 3000,
  //   //   disableOnInteraction: false,
  //   // },
  //   breakpoints: {
  //     756: {
  //       slidesPerView: '3',
  //       spaceBetween: 30,
  //       // loop: true
  //     }
  //   }
  // });
// });

$(document).ready(function () {
  // var marquee = $("#marquee");
  // marquee.css({"overflow": "hidden", "width": "100%"});
  // // оболочка для текста ввиде span (IE не любит дивы с inline-block)
  // marquee.wrapInner("<span>");
  // marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" });
  // marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
  // marquee.wrapInner("<div>");
  // marquee.find("div").css("width", "200%");
  // var reset = function() {
  //   $(this).css("margin-left", "0%");
  //   $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
  // };
  // reset.call(marquee.find("div"));
  // $('.string').liMarquee();
  $('.anyClass').liMarquee();

});

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
