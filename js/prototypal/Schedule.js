if (typeof MYPROJ === 'undefined') {
    var MYPROJ = {};
}

/**
 * Model representing a schedule
 *
 * @class
 * @type {MYPROJ.Schedule}
 */
MYPROJ.Schedule = (function () {
    "use strict";

    var constructor;

    constructor = function () {

    };
    constructor.prototype = {
        /**
         * Render the schedule to all elements that match the given selector
         * @param {String} selector CSS selector for elements to render the schedule to
         */
        renderTo: function (selector) {

        }
    };

    return constructor;
}());