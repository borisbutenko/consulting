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
                toTop$    = $('#top-button'),
                toBack$   = $('#back-button');

            $(window).scroll(function () {
                showBtn();
            });

            showBtn();

            function showBtn() {
                if ( $('body').scrollTop()  > 500) {
                    callback$.addClass('active');
                    toTop$.addClass('active');
                    toBack$
                        .addClass('active')
                }
                else {
                    callback$.removeClass('active');
                    toTop$.removeClass('active');
                    toBack$.removeClass('active')
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

        new Swiper('.swiper-restruct', {
            slidesPerView: 4,
            paginationClickable: true,
            nextButton: '.services-with__button-next',
            prevButton: '.services-with__button-prev',
            spaceBetween: 30
        });

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
        $('.tab-content').on('click', '.panel-heading', function() {
            $('html, body').animate({
                scrollTop : getCoords( $(this)[0] ).top - 25
            }, 300);
        });

        /**
         *  Fixies menu
         */
        (function() {
            if ( !$('div.tab-pane.in.active').length ) return false;
            if ( window.innerWidth <= 767 ) return false;

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

            function action(s) {
                var tab$   = $('div.tab-pane.in.active');

                var coordsE = getCoords( tab$[0] );

                var height = parseInt(
                    getComputedStyle(
                        tab$[0]
                    ).height ),
                    outherPosition = coordsE.top + height;

                $('.tab-list__link')
                    .off('click')
                    .on('click', function() {
                        $(this).parents('ul').css({
                            left : '0'
                        });

                        target$.parents('ul').css({
                            height  : height
                        });

                        $('html, body').animate({
                            scrollTop : coordsE.top
                        }, 300);

                        action(
                            $(window).scrollTop() - 50
                        );
                    });

                target$.css({
                    width : $('.col-md-4.col-sm-6.col-xs-12').width() || $('.col-md-3.col-sm-5.col-xs-12').width()
                });

                if ( s >= coordsT.top ) {
                    target$.css({
                        position    : 'fixed',
                        top         : 0,
                        bottom      : 'unset',
                        left        : 'unset'
                    });
                } else {
                    target$.css({
                        position    : 'relative',
                        top         : 'unset',
                        bottom      : 'unset',
                        left        : '0'
                    });
                }

                if ( s + wh >= outherPosition ) {
                    target$.parent().css({
                            height   : ( target$.height() <= tab$.height() ) ? height : ''
                        }).end().css({
                            position    : ( target$.height() <= tab$.height() ) ? 'absolute' : 'relative',
                            top         : 'unset',
                            bottom      : 0,
                            left        : 'unset',
                            overflow    : 'hidden'
                        })
                }
            }
        })();

        /**
         * Tooltipster
         */
        (function() {
            $('[data-tooltip-1]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-service-1'),
                contentCloning  : true,
                trigger         : 'click',
                maxWidth        : 400,
                side            : 'right',
                interactive     : true
            });

            $('[data-tooltip-2]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-service-2'),
                contentCloning  : true,
                trigger         : 'click',
                maxWidth        : 400,
                side            : 'right',
                interactive     : true
            });

            $('[data-tooltip-3]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-service-3'),
                contentCloning  : true,
                trigger         : 'click',
                maxWidth        : 400,
                side            : 'right',
                interactive     : true
            });

            $('[data-tooltip-4]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-service-4'),
                contentCloning  : true,
                trigger         : 'click',
                maxWidth        : 400,
                side            : 'right',
                interactive     : true
            });

            $('[data-tooltip-5]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-service-5'),
                contentCloning  : true,
                trigger         : 'click',
                maxWidth        : 400,
                side            : 'right',
                interactive     : true
            });

            $('[data-tooltip-info]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-info'),
                contentCloning  : true,
                trigger         : 'click',
                minWidth        : 300,
                side            : 'top',
                interactive     : true
            });

            $('[data-tooltip-price]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-price'),
                contentCloning  : true,
                trigger         : 'click',
                minWidth        : 300,
                side            : 'top',
                interactive     : true
            });

            $('[data-tooltip-term]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-term'),
                contentCloning  : true,
                trigger         : 'click',
                minWidth        : 300,
                side            : 'top',
                interactive     : true
            });

            $('[data-tooltip-dop]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-dop'),
                contentCloning  : true,
                trigger         : 'click',
                minWidth        : 300,
                side            : 'top',
                interactive     : true
            });

            $('[data-tooltip-cl]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-cl'),
                contentCloning  : true,
                trigger         : 'click',
                minWidth        : 300,
                side            : 'top',
                interactive     : true
            });

            $('[data-tooltip-dec]').tooltipster({
                theme           : 'tooltipster-shadow',
                content         : $('#tooltip-dec-1'),
                contentCloning  : true,
                trigger         : 'click',
                minWidth        : 300,
                side            : 'top',
                interactive     : true
            });
        })();

        $('.menu-table td > a').hover(function() {
            $(this)
                .parent()
                .addClass('hovered')
                .children('a')
                .css({
                    width : '100%'
                })
                .parents('tr')
                .children('td:not(.hovered)')
                .hide();

            $(this)
                .parent()
                .attr('colspan', '5');
        }, function() {
            $(this)
                .css({
                    width : '100%'
                })
                .parent()
                .removeAttr('colspan')
                .removeClass('hovered')
                .parents('tr')
                .children('td').show();
        });

        $('[data-menu-swiper]').hover(function() {
            if ( !window.hoverWidth ) window.hoverWidth = $(this).width();

            $(this)
                .addClass('hovered')
                .css({
                    width : '100%'
                })
                .parent()
                .children('li:not(.hovered)')
                .hide();
        }, function() {
            $(this)
                .removeClass('hovered')
                .parent()
                .children('li')
                .css({
                    width : window.hoverWidth
                })
                .show();
        });

        $('.menu-table a').mousedown(function(e) {
            if (e && (e.which == 2 || e.button == 4 )) {
                e.stopPropagation();
                return false;
            }
        });

        $('.menu-table__body__link').on('click', function(e) {
            e.stopPropagation();
            window.location = $(this).attr('href');
            return false;
        });

        $('.menu-table').on('click', '.menu-table__body', function(e) {
            e.stopPropagation();
            return false;
        });

        $('.tab-list__link').on('click', function() {
            console.log('here', window.innerWidth)
            if ( window.innerWidth <= 767 ) {
                console.log('here');
                $('html, body').animate({
                    scrollTop : getCoords( $('[data-tab-list]')[0] ).top - 25
                }, 300);
            }
        });

        $('.all-services').on('click', function(e) {
            e.stopPropagation();
            window.location = $(this).data('href');
            return false;
        });

        function getCoords(elem) {
            if ( !$(elem).length ) return false;

            var box = elem.getBoundingClientRect();

            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };
        }

    });

})(jQuery);