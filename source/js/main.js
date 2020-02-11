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
