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

$().fancybox({
    selector : '.expert-swiper__slide',
    backFocus: false
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
// $(document).ready(function () {
//   if ($("section").hasClass("search") && width > 755) {
//     var windowHeight = $(window).height();
//     var search = $('.search__input');
//     var height = search.offset().top + search.height();
//     $(document).on('scroll', function() {
//       // если расстояние до поиска + его высота >= расстоянию,
//       //  которое пользователь пролистал + высота окна
//       if ($(document).scrollTop() + windowHeight >= height) {
//         search.focus();
//       }
//     });
//   }
// });

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

  // выбрать регион (модалка 3)
  $('.modal-region-second').click(function (evt) {
    evt.preventDefault();
    openModal('modal--region-second');
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
