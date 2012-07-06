JavaScript in this directory shows how to use a prototypal OOP pattern.

The evolution of this pattern is as follows:

Start with a constructor:
```js
function Greeter() {
    alert(this.greeting + ' ' + this.subject + '!');
}
Greeter.prototype = {
    greeting: 'Hello',
    subject: 'World',
};

new Greeter();
```

Add module pattern to use private variables:
```js
(function(){
    _greeting = 'Hello'

    window.Greeter = function() {
        alert(_greeting + ' ' + this.subject + '!');
    };
    window.Greeter.prototype = {
        subject: 'World',
    };
}());

new Greeter();
```

Add the export pattern as we are exporting 1 thing:
```js
var Greeter = (function(){
    _greeting = 'Hello'

    constructor = function () {
        alert(_greeting + ' ' + this.subject + '!');
    };
    constructor.prototype = {
        subject: 'World',
    };
    return constructor;
}());

new Greeter();
```