var width = $(window).width();

// при отключённом js - показывать меню
$('.header').removeClass('no-js');

// главный блок с фоном
if ($(".main-info").hasClass("bg")) {
  $('.header').addClass('bg');
}

if ($(".main-info").hasClass("database")) {
  $('.main-nav').addClass('database');
}

// мобильное меню
$(document).ready(function () {
  $('.header__menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $('.main-nav').toggleClass('active');
    $("body").toggleClass('noscroll'); // отключить если нет js и
  });
});

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
  if (width > 755) {
    $('#main-info-marquee').marquee({
      duration: 20000,       // время на прохождение
      startVisible: true,    // заполненный текст
      duplicated: true       // дублировать
    });
  }
});

// подменю на мобильном
$(document).ready(function () {
  if (width <= 756) {
    $('.main-nav-sub').click(function(evt) {
      evt.preventDefault();
      var currentSublist = $(this).closest('.main-nav__item').find('.main-nav__sublist');
      // $('.main-nav__sublist').not(currentSublist).slideUp(300);
      // currentSublist.slideToggle(300);
      $('.main-nav__sublist').not(currentSublist).removeClass('show');
      currentSublist.toggleClass('show');
    });
  }
});

// updateFraction START

// function updateFraction(slider) {
//   var sliderActiveIndex = slider.activeIndex + 1;
//   var sliderElement = slider.el;
//   var fractionActiveZero = sliderElement.querySelector('.swiper-pagination-current-zero');

//   if (sliderActiveIndex >= 10) {
//     fractionActiveZero.classList.add('hidden');
//   } else if (sliderActiveIndex < 10) {
//     fractionActiveZero.classList.remove('hidden');
//   }
// }

function updateFraction(slider) {
  // если loop = true -> realIndex, иначе activeIndex

  var { params, realIndex } = slider;

  slider.$el
    .find(`.${params.pagination.currentClass}`)
    // .text(`${activeIndex + 1} - ${activeIndex + params.slidesPerView}`);
    // .text(`${activeIndex + 1}`);

  $('.swiper-pagination-slash').text(`${slider.realIndex + 2} ...`);

  // slider.$el
    // .find(`.${params.pagination.totalClass}`)
    // .text(slider.slides.length)
    // .text(`${realIndex + 2} ${realIndex + 3} ... ${slider.slides.length - 1}`)
}

// mainSwiper.on('slideChange', function () {
//   updateFraction(this);
// });

// updateFraction END

// [rehab-page]
// галерея рехаба
$(document).ready(function () {
  var doubleGallery = $('.gallery-swiper');

  // если блок с этим слайдером есть на странице
  if (doubleGallery.length != 0) {
    var gallerySwiperMain = new Swiper('#gallery-swiper', {
      slidesPerView: 3.5,
      spaceBetween: 32,

      loop: true,
      centeredSlides: true,

      breakpoints: {
        1921: {
          slidesPerView: 3,
          slidesOffsetBefore: 0,
        },
        800: {
          slidesPerView: 3.5,
        },
        300: {
          slidesPerView: 2,
          slidesOffsetBefore: 0,
          spaceBetween: 20,
        }
      },

      pagination: {
        el: '.gallery-progressbar',
        type: 'progressbar'
      }
    });

    // параметры для пагинации
    var paginationParam = {
      el: '.gallery-pagination',
      clickable: true,
    }

    // количество слайдов (учитывая зацикленность)
    var gallerySlidesLength = $('.gallery-swiper__slide:not(.swiper-slide-duplicate)').length;

    // если элементов > 6, то пагинация - fraction-формата, иначе - bullet-формата
    if (gallerySlidesLength > 6) {
      paginationParam.type = 'fraction';
      paginationParam.renderFraction = function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
               '<span class="swiper-pagination-slash">/</span>' +
               '<span class="' + totalClass + '"></span>';
        }

      if (gallerySlidesLength < 10) {
        $('.gallery-pagination').addClass('swiper-pagination-fraction-small');
      }

    } else {
      paginationParam.renderBullet = function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    }

    var gallerySwiperPagination = new Swiper('#gallery-swiper-pagination', {
      slidesPerView: 3.5,
      spaceBetween: 32,

      loop: true,
      centeredSlides: true,

      // on: {
      //   init() {
      //     setTimeout(updateFraction, 0, this)
      //   },
      //   slideChange() {
      //     updateFraction(this);
      //   },
      //   resize() {
      //     updateFraction(this);
      //   },
      // },

      breakpoints: {
        1921: {
          slidesPerView: 3,
          slidesOffsetBefore: 0,
        },
        800: {
          slidesPerView: 3.5,
        },
        300: {
          slidesPerView: 2,
          slidesOffsetBefore: 0,
          spaceBetween: 20,
        }
      },

      pagination: paginationParam,

      // pagination: {
      //   el: '.gallery-pagination',
      //   clickable: true,

      //   renderBullet: function (index, className) {
      //     return '<span class="' + className + '">' + (index + 1) + '</span>';
      //   }

      //   // type: 'fraction',
      //   // renderFraction: function (currentClass, totalClass) {
      //   //   return '<span class="' + currentClass + '"></span>' +
      //   //          '<span class="swiper-pagination-slash">/</span>' +
      //   //          '<span class="' + totalClass + '"></span>';
      //   // },
      // },
    });

    gallerySwiperMain.controller.control = gallerySwiperPagination;
    gallerySwiperPagination.controller.control = gallerySwiperMain;
  }
});

// слайдер программы
$(document).ready(function () {
  var doubleProgram = $('.program-swiper');
  // если блок с этим слайдером есть на странице
  if (doubleProgram.length != 0) {
    var programSwiperMain = new Swiper('#program-swiper', {
      slidesPerView: 3.5,
      spaceBetween: 32,
      preloadImages: false,

      loop: true,
      centeredSlides: true,

      breakpoints: {
        1921: {
          slidesPerView: 3,
          slidesOffsetBefore: 0,
        },
        800: {
          slidesPerView: 3.5,
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
      slidesPerView: 3.5,
      spaceBetween: 32,

      loop: true,
      centeredSlides: true,

      breakpoints: {
        1921: {
          slidesPerView: 3,
          slidesOffsetBefore: 0,
        },
        800: {
          slidesPerView: 3.5,
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
  }
});

// слайдер центров
$(document).ready(function () {
  var mySwiper = new Swiper('#center-swiper', {
    slidesPerView: '1.5',
    spaceBetween: 30,

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

    breakpoints: {
      756: {
        slidesPerView: '4',
        spaceBetween: 26,
      }
    }
  });
});

// [database page]
// табы
$(document).ready(function () {
  $('.sections-toggle__btn').on("click", function () {
    $('.sections-toggle__btn').removeClass('active');
    $(this).toggleClass('active');

    var data = $(this).data('id');
    // console.log(data);
    $('.articles-toggle-block').removeClass('active');
    $('.articles-toggle-block[data-id='+data+']').toggleClass('active');
  });
});

$(document).ready(function () {
  if(width <= 755) {
    $('.sections-toggle__select').on("click", function(evt) {
      evt.preventDefault();
      $(this).toggleClass('active');
      $('.sections-toggle__list').slideToggle();
    });
  }
});

// автофокус поиска
$(document).ready(function () {
  if ($("section").hasClass("search") && width > 755) {
    var windowHeight = $(window).height();
    var search = $('.search__input');
    var height = search.offset().top + search.height();
    $(document).on('scroll', function() {
      // если расстояние до поиска + его высота >= расстоянию,
      //  которое пользователь пролистал + высота окна
      if ($(document).scrollTop() + windowHeight >= height) {
        search.focus();
      }
    });
  }
});

// // [rehab-page]
// // галерея рехаба
// $(document).ready(function () {
//   var doubleGallery = $('.gallery-swiper');
//   // если блок с этим слайдером есть на странице
//   if (doubleGallery.length != 0) {
//     var gallerySwiperMain = new Swiper('#gallery-swiper', {
//       slidesPerView: 3.5,
//       spaceBetween: 32,

//       loop: true,
//       centeredSlides: true,

//       breakpoints: {
//         1921: {
//           slidesPerView: 3,
//           slidesOffsetBefore: 0,
//         },
//         800: {
//           slidesPerView: 3.5,
//         },
//         300: {
//           slidesPerView: 2,
//           slidesOffsetBefore: 0,
//           spaceBetween: 20,
//         }
//       },

//       pagination: {
//         el: '.gallery-progressbar',
//         type: 'progressbar'
//       }
//     });

//     var gallerySwiperPagination = new Swiper('#gallery-swiper-pagination', {
//       slidesPerView: 3.5,
//       spaceBetween: 32,

//       loop: true,
//       centeredSlides: true,

//       breakpoints: {
//         1921: {
//           slidesPerView: 3,
//           slidesOffsetBefore: 0,
//         },
//         800: {
//           slidesPerView: 3.5,
//         },
//         300: {
//           slidesPerView: 2,
//           slidesOffsetBefore: 0,
//           spaceBetween: 20,
//         }
//       },

//       pagination: {
//         el: '.gallery-pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (index + 1) + '</span>';
//         }
//       },
//     });

//     gallerySwiperMain.controller.control = gallerySwiperPagination;
//     gallerySwiperPagination.controller.control = gallerySwiperMain;
//   }
// });

// if (gal.length != 0) {
//   // galleryInit();
// }

// маска для поля ввода номера
$(document).ready(function () {
  $(".phone-mask").mask("+7 ( 999 ) 999 99 - 99");
});

// модальные окна
$(document).ready(function () {

  // оставить заявку
  // $('.modal-callback').click(function (evt) {
  //   evt.preventDefault();
  //   $('.overlay').fadeIn('active');
  //   $('.modal--callback').toggleClass('active');
  //   $('.modal__input-phone').focus();
  // });

  // изменить город
  // $('.modal-region').click(function (evt) {
  //   evt.preventDefault();
  //   $('.overlay').fadeIn('active');
  //   $('.modal--region').toggleClass('active');
  //   $('.modal__input').focus();
  // });

  // btn-close
  // $('.modal__close').click(function () {
  //   $('.modal').removeClass('active');
  //   $('.overlay').fadeOut('active');
  // });

  // открыть модальное окно
  function openModal(modalClass, focusClass) {
    $('.overlay').fadeIn('active');
    $('.' + modalClass).toggleClass('active'); // класс модалки
    $('.' + focusClass).focus();               // класс для фокуса
  }

  // оставить заявку (модалка 1)
  $('.modal-callback').click(function (evt) {
    evt.preventDefault();
    openModal('modal--callback', 'modal__input-phone');
  });

  // выбрать регион (модалка 2)
  $('.modal-region').click(function (evt) {
    evt.preventDefault();
    openModal('modal--region');
  });

  // $('.header__link-call-back').click(function (evt) {
  //   $(this).addClass('active');
  //   if($('.header__link-call-back').hasClass('active')) {
  //     $('body').removeClass('noscroll');
  //   }
  // });

  // закрыть модальное окно
  function closeModal() {
    if ($(".modal").hasClass("active")) {
      $('.modal').removeClass('active');
      $('.overlay').fadeOut('active');
    }
  }

  // клик/тач вне модального окна -> закрыть окно
  function clickOutsideModal(evt) {
    var modal = $(".modal");
    if (!modal.is(evt.target) && modal.has(evt.target).length === 0) {
      closeModal();
    }
  }

  // нажат esc -> закрыть окно
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closeModal();
    }
  });

  // слушаем клик/тач вне модального окна
  $(document).on('mouseup touchstart', clickOutsideModal);

  // кнопка закрыть
  $('.modal__close').click(function (evt) {
    closeModal();
  });
});
