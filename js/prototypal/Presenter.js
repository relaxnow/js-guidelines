if (typeof MYPROJ === 'undefined') {
    var MYPROJ = {};
}

/**
 * A conference presenter
 *
 * {@img ../../images/douglas_crockford_2.png}
 *
 * @class
 * @extends MYPROJ.Person
 * @type {*}
 */
MYPROJ.Presenter = (function () {
    "use strict";
    var constructor,
        /**
         * @private
         * @property {String}
         */
        _gender;

    /**
     * Create a new Presenter
     *
     * @param {Object} options
     * @return {MYPROJ.Presenter}
     * @constructor
     */
    constructor = function (options) {
        _gender = (options && options.gender) || 'LIZZARD';
        return this;
    };
    constructor.prototype = Object.create(new MYPROJ.Person(), {
        /**
         * Get the gender of a presenter, returns 'M', 'F' or 'LIZZARD'
         *
         * @return {String}
         */
        getGender: {
            value: function () {
                return _gender;
            }
        }
    });
    return constructor;
}());