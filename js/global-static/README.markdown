JavaScript in this directory shows how to use the tools for global JavaScript.

The evolution of this pattern is as follows:

Start with plain functions:
```js
function doStuff() {
}

function doMoreStuff() {

}
```

Add namespaces to not pollute the global namespace:
```js
var NS = {
    doStuff: function () {
    },

    doMoreStuff: function () {

    }
};
```

Wrap in module function to add private variables:
```js
(function() {
    var privateVarViaClosure = 0;

    window.NS = {
        doStuff: function () {
            privateVarViaClosure++;
        },

        doMoreStuff: function () {
            return privateVarViaClosure;
        }
    };
}());
```

Use the export pattern as it makes sense here:
```js
var NS = (function() {
    var privateVarViaClosure = 0;

    return {
        doStuff: function () {
            privateVarViaClosure++;
        },

        doMoreStuff: function () {
            return privateVarViaClosure;
        }
    }
}());
```