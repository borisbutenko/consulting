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

        /**
         *  Fixies menu
         */
        (function() {
            var target$ = $('ul.tab-list'),
                coordsT = getCoords( target$[0] ),
                styles  = getComputedStyle( target$[0] ),
                wh      = parseInt( styles.height );

            window.onscroll = function() {
                action(
                    $(window).scrollTop()
                )
            };

            action(
                $(window).scrollTop()
            );

            function getCoords(elem) {
                var box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };

            }

            function action(s) {
                var tab$   = $('div.tab-pane.in.active');

                if ( !tab$.length ) return false;

                var coordsE = getCoords( tab$[0] );

                var height = parseInt(
                    getComputedStyle(
                        tab$[0]
                    ).height ),
                    outherPosition = coordsE.top + height;

                $('.tab-list__link')
                    .off('click')
                    .on('click', function() {
                        target$.parent().css({
                            height   : height
                        });
                        $('html, body').animate({
                            scrollTop : coordsE.top
                        }, 300);

                        action(
                            $(window).scrollTop()
                        );
                    });

                target$.css({
                    width : $('.col-md-4.col-sm-6.col-xs-12').width() || $('.col-md-3.col-sm-5.col-xs-12').width()
                });

                if ( s >= coordsT.top ) {
                    target$.css({
                        position : 'fixed',
                        top      : 0,
                        bottom   : 'unset',
                        left     : 'unset'
                    });
                } else {
                    target$.css({
                        position : 'relative',
                        top      : 'unset',
                        bottom   : 'unset',
                        left     : 'unset'
                    });
                }

                console.log( s + wh, outherPosition, target$.height() <= tab$.height() )

                if ( s + wh >= outherPosition ) {
                    target$.parent().css({
                            height   : ( target$.height() <= tab$.height() ) ? height : ''
                        }).end().css({
                            position : ( target$.height() <= tab$.height() ) ? 'absolute' : 'relative',
                            top      : 'unset',
                            bottom   : 0,
                            left     : 0,
                            overflow : 'hidden'
                        })
                }
            }
        })();

        /**
         * Tooltipster
         */
        (function() {
            $('[data-tooltip]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-question'),
                contentCloning  : true,
                trigger         : 'click',
                maxWidth        : 400,
                side            : 'right',
                interactive     : true
            });

            $('[data-tooltip-info]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-question-info'),
                contentCloning  : true,
                trigger         : 'click',
                minWidth        : 300,
                side            : 'left',
                interactive     : true
            });

            $('[data-tooltip-dop]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-question-dop'),
                contentCloning  : true,
                trigger         : 'click',
                minWidth        : 300,
                side            : 'right',
                interactive     : true
            });
        })();

    });

})(jQuery);