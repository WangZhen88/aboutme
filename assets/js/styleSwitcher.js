/*====================================

  ======================================*/

(function ($) {
    "use strict";
    var mainAppNew = {

        main_fun: function () {

            $('#switch-panel').click(function () {
                if ($(this).hasClass('show-panel')) {
                    $('.switcher').css({ 'left': '-50px' });
                    $('#switch-panel').removeClass('show-panel');
                    $('#switch-panel').addClass('hide-panel');
                } else if ($(this).hasClass('hide-panel')) {
                    $('.switcher').css({ 'left': 0 });
                    $('#switch-panel').removeClass('hide-panel');
                    $('#switch-panel').addClass('show-panel');
                }
            });

            $('#pink').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/pink.css');
            });
            $('#green').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/green.css');
            });
            $('#blue').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/blue.css');
            });
            $('#brown').click(function () {
                $('#mainCSS').attr('href', 'assets/css/themes/brown.css');
            });
          
        },

        initialization: function () {
            mainAppNew.main_fun();

        }

    };
    // Initializing ///

    $(document).ready(function () {
        mainAppNew.main_fun();
    });

}(jQuery));
