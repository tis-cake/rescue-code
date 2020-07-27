var width = $(window).width();

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
    var gallerySlidesLength = $('#gallery-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;

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

// $().fancybox({
//     selector : '.gallery-swiper__slide',
//     backFocus: false
// });


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

// слайдер экспертов
$(document).ready(function () {
  var doubleExpert = $('.expert-swiper');

  // если блок с этим слайдером есть на странице
  if (doubleExpert.length != 0) {
    var expertSwiperMain = new Swiper('#expert-swiper', {
      slidesPerView: 4,
      spaceBetween: 32,

      // loop: true,
      // centeredSlides: false,

      breakpoints: {
        800: {
          // slidesPerView: 3.5,
          // centeredSlides: true,
        },
        300: {
          slidesPerView: 2,
          slidesOffsetBefore: 0,
          spaceBetween: 20,
          centeredSlides: true,
        }
      },

      pagination: {
        el: '.expert-progressbar',
        type: 'progressbar'
      }
    });

    // параметры для пагинации
    var paginationParam = {
      el: '.expert-pagination',
      clickable: true,
    }

    // количество слайдов (учитывая зацикленность)
    var expertSlidesLength = $('#expert-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;

    // если элементов > 5, то пагинация - fraction-формата, иначе - bullet-формата
    if (expertSlidesLength > 5) {
      paginationParam.type = 'fraction';
      paginationParam.renderFraction = function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
               '<span class="swiper-pagination-slash">/</span>' +
               '<span class="' + totalClass + '"></span>';
        }

      if (expertSlidesLength < 10) {
        $('.expert-pagination').addClass('swiper-pagination-fraction-small');
      }
    } else if (expertSlidesLength <= 4 && width > 750) {
      $('.expert-swiper').addClass('center');
    } else {
      paginationParam.renderBullet = function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    }

    var expertSwiperPagination = new Swiper('#expert-swiper-pagination', {
      slidesPerView: 4,
      spaceBetween: 32,

      // loop: true,
      // centeredSlides: false,

      breakpoints: {
        800: {
          // slidesPerView: 3.5,
          // centeredSlides: true,
        },
        300: {
          slidesPerView: 2,
          slidesOffsetBefore: 0,
          spaceBetween: 20,
          centeredSlides: true,
        }
      },

      pagination: paginationParam,
    });

    expertSwiperMain.controller.control = expertSwiperPagination;
    expertSwiperPagination.controller.control = expertSwiperMain;
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
