$(document).ready(function () {
    function reset () {
        $('.modal__form').find('input').each(function () {
            $('input').val('');
        });
    };
    $('.show-modal').click(function () {
        $('#zayavka-modal').addClass('active');
    });
    //
    // function resetFormForCall () {
    //     $('.callme').find('input').each(function () {
    //         $('input').val('');
    //     });
    // };
    //
    // function showMessage() {
    //     $('#massage').addClass('active');
    //     if($('.overlay').css('display') == "none"){
    //         $('.overlay').fadeIn(100);
    //     }
    //
    //     setTimeout(function() {
    //         $('#massage').removeClass('active');
    //         $('.overlay').fadeOut(200);
    //     }, '2500');
    // };

    function closeModal() {
        if ($(".modal").hasClass("active")) {
            $('.modal').removeClass('active');
            $('.overlay').fadeOut(200);
        }
    }
    $('.callme').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/callme.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                // showMessage();
                closeModal();
                reset ();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });





    $('#comments').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/comments.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                // showMessage();
                // closeModal();
                reset();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });

    $('.znanya_search').submit(function () {
        var data = $(this).serialize();
        $.ajax({
            type: 'post',
            url: '/ajax/znanya_search.php',
            data: data,
            dataType: 'html',
            success: function (e) {
                $('.baza-znaniy-list').empty();
                $('.baza-znaniy-list').append(e);
            }
        });
        return false;
    });
    $('.znanya_search:before').click(function () {
        $('.znanya_search').submit();
    });
    $('.znanya_search input').keyup(function () {
        $('.znanya_search').submit();
    });



    $( '#modal-region [data-id]' ).on( 'click', function (e) {
        e.preventDefault();
        var id = $(this).data('id');

        $.ajax( {
            type: 'post',
            url: '/ajax/centry-na-karte.php',
            data: { ID: id },
            success: function (e) {
                console.log(e);
                console.log(true);
                $('.modal--region').removeClass('active');
                $('.overlay').fadeOut(200);
                $('.map-wrapper').empty();
                $('.map-wrapper').append(e);

                $.ajax({
                    type: 'post',
                    url: '/ajax/filter-centry_podkartoy.php',
                    data: { ID: id },
                    dataType: 'html',
                    success: function (e) {
                        console.log(e);
                        console.log(true);
                        $('.rehab-swiper__wrapper').empty().append(e);
                    },
                    error: function (e) {
                        console.log(e);
                        console.log(false);
                    }
                });
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        } );
    } );



    // $('#find_region').submit(function () {
    //     var data = $(this).serialize();
    //     console.log(data);
    //     $.ajax({
    //         type: 'post',
    //         url: '/ajax/centry-na-karte_poisk.php',
    //         data: data,
    //         dataType: 'html',
    //         success: function (e) {
    //             console.log(e);
    //             console.log(true);
    //             $('.modal--region-here').removeClass('active');
    //             $('.overlay').fadeOut(200);
    //             $('.contacts-map__container').empty();
    //             $('.contacts-map__container').append(e);
    //
    //         },
    //         error: function (e) {
    //             console.log(e);
    //             console.log(false);
    //         }
    //     });
    //     return false;
    // });


    //передаем значение id города в input
    // $('.filter_centry').on('click', '.choose-city', function (event) {
    //     var dataID = $(this).find('.contacts-map__filter-item').data('id');
    //     $('input[name="REGION"]').val(dataID);
    //     console.log($('input[name="REGION"]').val());
    // });
    //
    // $('.filter_centry').on('click', '.choose-tarif', function (event) {
    //     var dataID = $(this).find('.contacts-map__filter-item').data('id');
    //     $('input[name="TARIFF"]').val(dataID);
    //     console.log($('input[name="TARIFF"]').val());
    // });




    // $("#filter-range").slider({
    //     range: true,
    //     min: 0,
    //     max: 200000,
    //     values: [ 10000, 200000 ],
    //     slide: function( event, ui ) {
    //         $( "#range-toggle-min" ).val(ui.values[ 0 ]);
    //         $( "#range-toggle-max" ).val(ui.values[ 1 ]);
    //     }
    // });
    // $( "#range-toggle-min" ).val($( "#filter-range" ).slider( "values", 0 ));
    // $( "#range-toggle-max" ).val($( "#filter-range" ).slider( "values", 1 ));
    //
    //
    //
    //


    // $().fancybox({
    //     selector : '.gallery-swiper__img-wrapper a:visible',
    //     loop: true,
    //     animationEffect: "zoom-in-out",
    //     buttons : [
    //         'fullScreen',
    //         'close'
    //     ],
    //     titleShow: true
    // });

})
