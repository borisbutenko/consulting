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

    });

})(jQuery);