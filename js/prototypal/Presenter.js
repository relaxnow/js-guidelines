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
         * @property {String}
         * @private
         */
        _firstName,

        /**
         * @property {String}
         * @private
         */
        _lastName,

        /**
         * @property {String}
         * @private
         */
        _gender;

    /**
     * Create a new Presenter
     *
     * @param {Object=} properties
     * @param {String=} properties.firstName
     * @param {String=} properties.lastName
     * @param {String=} properties.gender
     * @return {MYPROJ.Presenter}
     * @constructor
     */
    constructor = function (properties) {
        _firstName = properties && properties.firstName;
        _lastName  = properties && properties.lastName;
        _gender = (options && options.gender) || 'LIZZARD';
        return this;
    };
    constructor.prototype = Object.create(MYPROJ.Person.prototype, {
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