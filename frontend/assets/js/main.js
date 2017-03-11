(function($) {

    $(function() {

        /**
         * Toggle menu services
         */
        $('#services').hover(function() {
            $('.section__services')
                .slideDown(300)
                .mouseleave(function() {
                    $(this).slideUp(300);
                });
        });

        /**
         * Input mask phone
         */
        $('input.input-phone').inputmask({
            mask: '+7 (999) 999 - 99 - 99'
        });

        /**
         *  InitMap
         */
        (function() {
            var center = {
                lat: 55.751244,
                lng: 37.618423
            };

            if ( !$('#contact-google-map').length ) return false;

            var map = new google.maps.Map(document.getElementById('contact-google-map'), {
                zoom: 15,
                center: center
            });

            var marker = new google.maps.Marker({
                position: center,
                map: map
            });
        }());

        /**
         * Show fixed buttons
         */
        (function($) {

            var callback$ = $('#callback-button'),
                toTop$    = $('#top-button');

            $(window).scroll(function () {
                showBtn();
            });

            showBtn();

            function showBtn() {
                if ( $('body').scrollTop()  > 500) {
                    callback$.addClass('active');
                    toTop$.addClass('active');
                }
                else {
                    callback$.removeClass('active');
                    toTop$.removeClass('active');
                }
            }

        })($);

        /**
         * Scroll top
         */
        (function() {
            var btn$ = $('#top-button');

            btn$.on('click', function() {
                $('html, body').animate( { scrollTop: 0 }, 1000);
            });
        })();

        /**
         * Show categories
         */
        (function() {
            $('#show-categories').on('click', function() {
                $('.categories-hidden').slideToggle(300);
            })
        })();

        /**
         * Swiper audit
         */
        if ( window.innerWidth <= 600 ) {
            new Swiper('.audit', {
                slidesPerView: 2,
                paginationClickable: true,
                nextButton: '.audit__button-next',
                prevButton: '.audit__button-prev',
            });
        } else {
            new Swiper('.audit', {
                slidesPerView: 4,
                paginationClickable: true,
                nextButton: '.audit__button-next',
                prevButton: '.audit__button-prev',
            });
        }

        /**
         * Swiper services with
         */
        if ( window.innerWidth <= 600 ) {
            new Swiper('.services-with', {
                slidesPerView: 2,
                paginationClickable: true,
                nextButton: '.services-with__button-next',
                prevButton: '.services-with__button-prev',
                spaceBetween: 30
            });
        } else {
            new Swiper('.services-with', {
                slidesPerView: 5,
                paginationClickable: true,
                nextButton: '.services-with__button-next',
                prevButton: '.services-with__button-prev',
                spaceBetween: 30
            });
        }

        /**
         *  Ul/Ol change icon
         */
        $('[data-parent]').on('click', function() {
            var target$ = $(this).find('i.fa');

            if ( target$.hasClass('fa-arrow-circle-o-down') ) {
                target$
                    .removeClass('fa-arrow-circle-o-down')
                    .addClass('fa-arrow-circle-o-up');
            } else {
                target$
                    .removeClass('fa-arrow-circle-o-up')
                    .addClass('fa-arrow-circle-o-down');
            }
        });

        /**
         *  Accordion change icon
         */
        $('#accordion').on('click', '[data-parent="#accordion"]', function() {
            var target$ = $(this).find('i.fa');

            $('i.fa-minus')
                .not(target$)
                .removeClass('fa-minus')
                .addClass('fa-plus');

            if ( target$.hasClass('fa-plus') ) {
                target$
                    .removeClass('fa-plus')
                    .addClass('fa-minus');
            } else {
                target$
                    .removeClass('fa-minus')
                    .addClass('fa-plus');
            }
        });

    });

})(jQuery);