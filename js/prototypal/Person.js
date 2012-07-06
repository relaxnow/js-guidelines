if (typeof MYPROJ === 'undefined') {
    var MYPROJ = {};
}

/**
 * Person model
 *
 * {@img ../../images/Stick_guy.jpg A person consists of a round head, two arms, two legs, a body and a neck, no more, no less}
 *
 * @class
 * @type {MYPROJ.Person}
 */
MYPROJ.Person = (function () {
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
        _gender,

        /**
         * @property {Array}
         * @private
         */
        _notifiers = [];

    /**
     * Create a new Person object
     *
     * @param {Object=} properties
     * @param {String=} properties.firstName
     * @param {String=} properties.lastName
     * @param {String=} properties.gender
     * @return MYPROJ.Person
     * @constructor
     */
    constructor = function (properties) {
        _firstName = properties && properties.firstName;
        _lastName  = properties && properties.lastName;
        _gender    = properties && properties.gender;
        return this;
    };
    constructor.prototype = {
        /**
         * Get the persons first name
         *
         * @return {String} First name
         */
        getFirstName: function () {
            return _firstName;
        },

        /**
         * Set a firstname
         *
         * @param {String} newFirstName
         * @return {MYPROJ.Person}
         */
        setFirstName: function (newFirstName) {
            _firstName = newFirstName;
            return _callNotifiers(this);
        },

        /**
         * Get the persons last name
         *
         * @return {String} Surname
         */
        getLastName: function () {
            return _lastName;
        },

        /**
         * Get the persons gender (either 'M' or 'F')
         *
         * @return (String) Gender indicator
         */
        getGender: function () {
            return _gender;
        },

        /**
         * Get notified when a person object changes
         *
         * @param {function(MYPROJ.Person): MYPROJ.Person} Callback when this person has been modified
         */
        notify: function (fn) {
            if (typeof fn !== 'function') {
                throw new TypeError('Notifier is not a function!');
            }

            _notifiers.push(fn);
            return this;
        }
    };

    /**
     * Call all the notifiers and give them the Person object to inspect and modify.
     *
     * Note that this offers no protection against recursive issues (notifier that modifies,
     * thus triggering notifiers, which modifies the object, thus triggering the notifiers, ad nauseam).
     *
     * @param {MYPROJ.Person} person
     * @return {MYPROJ.Person}
     * @private
     */
    function _callNotifiers(person) {
        var i = 0;
        while (i < _notifiers.length) {
            person = _notifiers[i](person);
            i += 1;
        }
        return person;
    }

    return constructor;
}());