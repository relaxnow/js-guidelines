/**
 * Global namespace for all My Project functionality
 *
 * @class
 * @type {*}
 */
var MYPROJ = (function () {
    "use strict";

    /**
     * Get the greeting to use
     * @return {String}
     * @private
     */
    function _getGreeting() {
        return 'hello';
    }

    /**
     * Get the subject that needs to be greeted
     * @return {String}
     * @private
     */
    function _getGreetingSubject() {
        return 'world';
    }

    return {
        /**
         * Alert a friendly greeting to a visitor from out of this world
         */
        doHelloWorld: function () {
            var greeting = _getGreeting() + ' ' + _getGreetingSubject();
            alert(greeting);
        }
    };
})();