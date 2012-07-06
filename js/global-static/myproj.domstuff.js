if (typeof MYPROJ === 'undefined') {
    var MYPROJ = {};
}

/**
 * This sub namespace of the MYPROJ namespace contains DOM stuff.
 *
 * @class
 * @type {MYPROJ.SUB}
 */
MYPROJ.DOMSTUFF = (function ($) {
    "use strict";

    return {
        /**
         * Do stuff with jQuery, rebind $ to jQuery for compatibility
         */
        doStuffWithJQuery: function () {
            $('form').hide('slow', function () {
                $('form').show();
            });
        }
    };
}(jQuery));